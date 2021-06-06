import React from 'react';
import { Input, Row, Col, Divider } from 'antd';
import { AppContext } from '../../App';
import './search.css';

const { Search } = Input;

function SearchComponent() {
    const { updateState } = React.useContext(AppContext);

    const onSearch = value => updateState({ searchedText: value });

    return <Row gutter={8}>
        <Col className="mar-auto mar-tp-25" md={12} sm={24}>
                <Search placeholder="Enter github username" onSearch={onSearch}  />
        </Col>
        <Divider></Divider>
    </Row>
}

export default React.memo(SearchComponent);