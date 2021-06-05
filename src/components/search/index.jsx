import React from 'react';
import { Input, Space, Row, Col } from 'antd';
import { AppContext } from '../../App';

const { Search } = Input;

function SearchComponent() {
    const { updateState } = React.useContext(AppContext);

    const onSearch = value => updateState({ searchedText: value });

    return <Row gutter={8}>
        <Col span={12} sm={24}>
            <Space direction="vertical">
                <Search placeholder="Enter github username" onSearch={onSearch} />
            </Space>
        </Col>
    </Row>
}

export default React.memo(SearchComponent);