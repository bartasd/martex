import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "./App.module.css";

function App() {
  return (
    <Container>
      <Row>
        <Col className={style.col} sm={8}>sm=8</Col>
        <Col className={style.col} sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col className={style.col} sm>sm=true</Col>
        <Col className={style.col} sm>sm=true</Col>
        <Col className={style.col} sm>sm=true</Col>
      </Row>
    </Container>
  );
}

export default App;
