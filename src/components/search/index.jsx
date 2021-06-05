import React from 'react';
import { Input, Space, Row } from 'antd';
import { AppContext } from '../../App';

const { Search } = Input;

function SearchComponent() {
    const { updateState } = React.useContext(AppContext);

    const onSearch = value => updateState({ searchedText: value });

    return <Row gutter={8}>
        <Space direction="vertical">
            <Search placeholder="Enter github username" onSearch={onSearch} />
        </Space>
    </Row>
}

export default React.memo(SearchComponent);