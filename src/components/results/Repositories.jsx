import React from 'react';
import { Col, Row, Card, Tooltip, Empty } from 'antd';
import { AppContext } from '../../App';
import TextTruncate from 'react-text-truncate';


function UserDetails() {
    const { state } = React.useContext(AppContext);
    return <Row gutter={16}>
        {state.repos && state.repos.length && state.repos.sort((a, b) => a.watchers - b.watchers).map(repo => {
            return <Col span={8}>
                <Card className="repo-card" title={<a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>} bordered={false}>
                    <Tooltip title={repo.description}>
                        <TextTruncate
                            line={2}
                            element="span"
                            truncateText="…"
                            text={repo.description}
                            className="description-repo"
                        />
                    </Tooltip>
                    <div>Watchers: {repo.watchers}</div>
                </Card>
            </Col>
        })
        }
        {state.repos &&
            state.repos.length === 0 &&
            <Col className="mar-auto mar-tp-25">
                <Empty
                    description={
                        <span>
                            No public repositories found.
                </span>
                    }
                />
            </Col>
        }

    </Row>
    // <Col span={22} offset={1}>
    //     {state.repos && <List
    //         header={<div>Repositories</div>}
    //         horizontal
    //         dataSource={state.repos.sort((a, b) => a.watchers - b.watchers)}
    //         renderItem={repo => (
    //             <List.Item>
    //                 <List.Item.Meta
    //                     title={<a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>}
    //                     description={<>
    //                         <div>{repo.description}</div>
    //                         <div>{repo.watchers}</div></>}

    //                 />
    //             </List.Item>
    //         )}
    //     />}
    // </Col>
}

export default React.memo(UserDetails);