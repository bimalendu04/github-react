import React from 'react';
import { Col, List } from 'antd';
import { AppContext } from '../../App';


function UserDetails() {
    const { state } = React.useContext(AppContext);
    return <Col span={22} offset={1}>
        {state.repos && <List
            header={<div>Repositories</div>}
            horizontal
            dataSource={state.repos.sort((a, b) => a.watchers - b.watchers)}
            renderItem={repo => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href={repo.html_url} target="_blank">{repo.name}</a>}
                        description={<>
                            <div>{repo.description}</div>
                            <div>{repo.watchers}</div></>}

                    />
                </List.Item>
            )}
        />}
    </Col>
}

export default React.memo(UserDetails);