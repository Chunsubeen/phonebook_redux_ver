import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => { // 개별 연락처 아이템을 표시하는 컴포넌트
    return (
        <Row>
            <Col lg={1}>
                <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" />
            </Col>
            <Col lg={9}>
                <div>
                {item.name}
                </div>
                <div>
                {item.phoneNumber}
                </div>
            </Col>
        </Row>
    )
}

export default ContactItem
