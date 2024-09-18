import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';  // Redux의 dispatch를 사용하여 액션을 발생시킴

const ContactForm = () => {
    const [name, setName] = useState('');  // 입력받은 이름을 상태로 관리
    const [phoneNumber, setPhoneNumber] = useState(0);  // 입력받은 전화번호를 상태로 관리
    const dispatch = useDispatch();  // 액션을 디스패치하여 Redux 스토어에 전달

    const addContact = (event) => {
        event.preventDefault(); //Form의 특징 계속 화면을 refresh시킴 그래서 preventDefault로 refresh를 막음
        dispatch({ type: "ADD_CONTACT", payload: { name: name, phoneNumber: phoneNumber } });  // Redux에 새로운 연락처 추가하는 액션 디스패치
    }

    return (
        <div>
            <Form onSubmit={addContact}>  {/*폼 제출 시 addContact 함수 호출*/}
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"  // 이름 입력란
                        onChange={(event) => setName(event.target.value)}  // 입력된 값을 name 상태로 업데이트
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Please enter Phone Number"  // 전화번호 입력란
                        onChange={(event) => setPhoneNumber(event.target.value)}  // 입력된 값을 phoneNumber 상태로 업데이트
                    />
                </Form.Group>

                <Button variant="primary" type="submit"> {/* //type이 submit이면 onClick이 아니라 onSubmit을 해야한다 */}
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ContactForm;
