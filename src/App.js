import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

//1.왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처리스트와 search창이 있음
//2.리스트에 유저 이름과 전화번호를 추가할 수 있다
//3.리스트에 아이템이 몇개있는지 보임
//4.사용자가 유저를 이름으로 검색해서 찾을 수 있음
function App() {
  return (
    <div className="App">
      <h1 className="title">PHONE BOOK</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
          <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
