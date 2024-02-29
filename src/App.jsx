import {Container, Row, Col} from 'react-bootstrap';
import style from "./App.module.css";
import Nav from "./components/Nav"

function App() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col className={style.col} xl={10} xxl={9} >
          <Nav></Nav>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>TEXT</Col>
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>PICTURE</Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>TEXT</Col>
      </Row>
      <Row className={`${style.rowMargin} justify-content-center`}>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>CLIP</Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>CLIP</Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>CLIP</Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>CLIP</Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>TEXT</Col>
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>PICTURE</Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>TEXT</Col>
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>PICTURE</Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>TEXT</Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>TEXT</Col>
        <Col className={style.col}  md={5} lg={5} xl={5} xxl={5}>PICTURE</Col>
      </Row>
      <Row className={`${style.rowMargin2} justify-content-center`}>
        <Col className={style.col} xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>STATS</Col>
        <Col className={style.col} xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>STATS</Col>
        <Col className={style.col} xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>STATS</Col>
      </Row>
    </Container>
  );
}

export default App;
