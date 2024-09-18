import React, { useState } from 'react';  // 상태를 사용하기 위해 useState 추가
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';  // Redux의 dispatch를 사용하여 액션을 발생시킴

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');  // 검색어를 상태로 관리
    const dispatch = useDispatch();  // 액션을 디스패치하여 Redux 스토어에 전달

    const searchContact = () => {
        dispatch({ type: "SEARCH_CONTACT", payload: searchTerm });  // 검색어로 연락처를 검색하는 액션 디스패치
    }

    return (
        <div>
            <Col lg={10}>
                <Form.Control 
                    type="text" 
                    placeholder="Please enter Name"  // 이름을 입력받는 입력란
                    onChange={(event) => setSearchTerm(event.target.value)}  // 입력된 값을 searchTerm 상태로 업데이트
                />
            </Col>
            <Col lg={2}>
                <Button onClick={searchContact}>Search</Button>
            </Col>
        </div>// 검색 버튼 클릭 시 searchContact 함수 호출
    )
}

export default SearchBox;
