import React from 'react';
import { Row, Col, List } from 'antd';
import { AppContext } from '../../App';


function UserDetails() {
    const { state } = React.useContext(AppContext);
    return <Col span={24}>
        <List
            header={<div>Repositories</div>}
            bordered
            dataSource={state.repos ? state.repos.sort((a, b) => a.watchers - b.watchers) : []}
            renderItem={repo => (
                <List.Item onClick={() => window.open(repo.html_url)}>
                    <div>{repo.name}</div>
                    <div>{repo.description}</div>
                    <div>{repo.watchers}</div>
                </List.Item>
            )}
        />
    </Col>
}

export default React.memo(UserDetails);