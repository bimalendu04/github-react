import React from 'react';
import { Avatar, Image, Row, Col } from 'antd';
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
            <Row className="bio">
                <Col>{state.userDetails.bio}</Col>
            </Row>
            <Row className="view-url">
                <Col>
                    <span onClick={() => window.open(state.userDetails.html_url)}>View Profile</span>
                </Col>
            </Row>
        </>
        }
    </>
}

export default React.memo(UserDetails);