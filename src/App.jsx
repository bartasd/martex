import { Container, Row, Col } from "react-bootstrap";
import style from "./App.module.css";
import Nav from "./components/Nav";
import Hero from "./assets/img/hero-1-img.png";
import Hero_bkg from "./assets/img/hero-1.jpg";
import Logo_content from "./text_contents/Logo_content";
import TextContent from "./text_contents/TextContent";
import ClipContent from "./text_contents/ClipContent";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Container fluid>
      <div
        style={{
          backgroundImage: `url(${Hero_bkg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row className="justify-content-center">
          <Col xl={10} xxl={9}>
            <Nav />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5} lg={5} xl={5} xxl={5}>
            <Logo_content />
          </Col>
          <Col md={5} lg={5} xl={5} xxl={5}>
            <img className={style.hero_img} src={Hero} />
          </Col>
        </Row>
      </div>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          <TextContent
            header={"Build a customer-centric marketing strategy"}
            text={"Ligula risus auctor tempus magna feugiat lacinia."}
          />
        </Col>
      </Row>
      <Row className={style.rowMargin}>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          <ClipContent icon={faChalkboard} header={"meh"} text={"muh"} />
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          CLIP
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          CLIP
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          CLIP
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          PICTURE
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          PICTURE
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          TEXT
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          PICTURE
        </Col>
      </Row>
      <Row className={`${style.rowMargin2} justify-content-center`}>
        <Col className={style.col} xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>
          STATS
        </Col>
        <Col className={style.col} xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>
          STATS
        </Col>
        <Col className={style.col} xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>
          STATS
        </Col>
      </Row>
    </Container>
  );
}

export default App;
