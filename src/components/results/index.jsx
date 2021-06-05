import React from 'react';
import { Row } from 'antd';
import { AppContext } from '../../App';
import * as Service from '../../services/Service';
import UserDetails from './UserDetails';
import Repositories from './Repositories';


function Result() {
    const { state, updateState } = React.useContext(AppContext);
    React.useEffect(() => {
        const searchedText = state.searchedText;
        if (searchedText) {
            updateState({ userLoading: true });
            Service.getUserDetails(searchedText).then((data) => {
                updateState({ userDetails: data, userLoading: false });
            });
            Service.getRepos(searchedText).then((data) => {
                updateState({ repos: data });
            });
        }
        // eslint-disable-next-line
    }, [state.searchedText]);

    return <>
        <Row>
            <UserDetails />
        </Row>
        <Row>
            <Repositories />
        </Row>
    </>
}

export default React.memo(Result);