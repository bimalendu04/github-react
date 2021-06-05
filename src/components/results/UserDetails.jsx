import React from 'react';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AppContext } from '../../App';

const { Meta } = Card;

function UserDetails() {
    const { state } = React.useContext(AppContext);
    return <>
        {state.userDetails && <Card style={{ width: 300, marginTop: 16 }} loading={state.userLoading}>
            <Meta
                avatar={
                    <Avatar size={64} icon={<UserOutlined />} src={state.userDetails.avatar_url} />
                }
                title={state.userDetails.name}
                description={state.userDetails.bio}
            />
        </Card>
        }
    </>
}

export default React.memo(UserDetails);