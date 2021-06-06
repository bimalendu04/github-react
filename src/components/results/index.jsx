import React from 'react';
import { AppContext } from '../../App';
import * as Service from '../../services/Service';
import UserDetails from './UserDetails';
import Repositories from './Repositories';
import './results.css';
import { Result as ShowError } from 'antd';

function Result() {
    const { state, updateState } = React.useContext(AppContext);
    React.useEffect(() => {
        const searchedText = state.searchedText;
        if (searchedText) {
            updateState({ userLoading: true });
            let promises = [];
            promises.push(Service.getUserDetails(searchedText));
            promises.push(Service.getRepos(searchedText));
            Promise.all(promises).then((data) => {
                updateState({ error: false, userDetails: data[0], repos: data[1], userLoading: false });
            }).catch((error) => {
                updateState({ error: true, userLoading: false });
            })
        }
        // eslint-disable-next-line
    }, [state.searchedText]);

    return <div className="main-container">
        {state && state.userDetails && <div className="sider">
            <UserDetails />
        </div>}
        {state && state.repos && <div className="content-repositories">
            <Repositories />
        </div>}
        {state && state.error && <ShowError
            status="warning"
            title="Something went wrong."
        />}
    </div>
}

export default React.memo(Result);