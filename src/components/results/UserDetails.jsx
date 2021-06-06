import React from 'react';
import { Avatar, Image, Row } from 'antd';
import './results.css';
import { AppContext } from '../../App';


function UserDetails() {
    const { state } = React.useContext(AppContext);
    return <>
        {state.userDetails && <>
            <Row className="avatar-container">
                <Avatar
                    size={64}
                    src={<Image src={state.userDetails.avatar_url} />}
                />
            </Row>
            <Row className="name">
                <div>{state.userDetails.name}</div>
            </Row>
            <Row>
                <div className="bio">{state.userDetails.bio}</div>
            </Row>
        </>
        }
    </>
}

export default React.memo(UserDetails);