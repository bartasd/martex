import { Container, Row, Col } from "react-bootstrap";
import style from "./App.module.css";
import texts from "./data/texts.json";
// --------- IMAGES ---------------------------------------
import Hero from "./assets/img/hero-1-img.png";
import Hero_bkg from "./assets/img/hero-1.jpg";
import Hem1 from "./assets/img/img-10.png";
import Hem2 from "./assets/img/img-06.png";
import S1 from "./assets/img/stats1.png";
import S2 from "./assets/img/stats2.png";
import SomeStats from "./assets/img/some_stats.png";
// --------------------------------------------------------
// --------- COMPONENTS -----------------------------------
import Nav from "./components/Nav";
import Logo_content from "./text_contents/Logo_content";
import TextContent from "./text_contents/TextContent";
import TextContentNew from "./text_contents/TextContentNew";
import ClipContent from "./text_contents/ClipContent";
import Hmm1 from "./text_contents/Hmm1";
import Hmm2 from "./text_contents/Hmm2";
import Stats from "./text_contents/Stats";
// --------------------------------------------------------
// --------- ICONS ----------------------------------------
import {
  faChalkboard,
  faLightbulb,
  faChartSimple,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
// --------------------------------------------------------

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
        <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          <ClipContent
            icon={faChalkboard}
            header={"Market Research"}
            text={"Luctus augue egestas undo ultrice and quisque lacush"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          <ClipContent
            icon={faLightbulb}
            header={"User Experience"}
            text={"Luctus augue egestas undo ultrice and quisque lacush"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          <ClipContent
            icon={faChartSimple}
            header={"Digital Marketing"}
            text={"Luctus augue egestas undo ultrice and quisque lacush"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
          <ClipContent
            icon={faObjectGroup}
            header={"SEO Services"}
            text={"Luctus augue egestas undo ultrice and quisque lacush"}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={5} lg={5} xl={5} xxl={5}>
          <img className={style.hero_img} src={Hem1} />
        </Col>
        <Col md={5} lg={5} xl={5} xxl={5}>
          <Hmm1
            first={"ENHANCE ENGAGEMENT"}
            header={"Engage your most valuable visitors"}
            text={
              "Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit"
            }
            header2={"Digits that define growth"}
            text21={
              "Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue cursus dolor"
            }
            text22={
              "Purus suscipit cursus vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat"
            }
          />
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={5} lg={5} xl={5} xxl={5}>
          <Hmm2
            header21={"Solution that grows with you"}
            text1={
              "Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit"
            }
            header22={"Connect your data sources"}
            text2={
              "Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus an ipsum vitae suscipit purus"
            }
            text21={
              "Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus"
            }
            text22={
              "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat"
            }
          />
        </Col>
        <Col md={5} lg={5} xl={5} xxl={5}>
          <img className={style.hero_img} src={Hem2} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          <TextContent
            header={"Reach your audience through social media marketing"}
            text={"Ligula risus auctor tempus magna feugiat lacinia."}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={5} lg={5} xl={5} xxl={5}>
          <Stats
            image={S1}
            header={"Marketing Integrations"}
            text={
              "Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero"
            }
            o={3}
          />
        </Col>
        <Col md={5} lg={5} xl={5} xxl={5}>
          <Stats
            image={S2}
            header={"Enhance Engagement"}
            text={
              "Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero"
            }
            o={1}
          />
        </Col>
      </Row>
      <Row className={`${style.rowMargin2} justify-content-center mb-5 mt-5`}>
        <Col xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>
          <TextContent
            header={"89k"}
            text={"Porta justo integer and velna vitae auctor"}
            st={true}
          />
        </Col>
        <Col xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>
          <TextContent
            header={"76%"}
            text={"Ligula magna suscipit vitae and rutrum"}
            st={true}
          />
        </Col>
        <Col xs={12} sm={12} md={2} lg={3} xl={3} xxl={3}>
          <TextContent
            header={"4.93"}
            text={"Sagittis congue augue egestas an egestas"}
            st={true}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mb-5 mt-5">
        <Col md={5} lg={5} xl={5} xxl={5}>
          <img className={style.hero_img} src={SomeStats} />
        </Col>
        <Col md={5} lg={5} xl={5} xxl={5}>
          <TextContentNew texts={texts[0]} st={1} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          CLIPS CLIPS CLIPS CLIPS
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          IMG
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
      </Row>
      <div style={{}}>
        <Row className="justify-content-center">
          <Col
            className={style.col}
            xs={10}
            sm={8}
            md={6}
            lg={6}
            xl={7}
            xxl={6}
          >
            <TextContent
              header={"Build a customer-centric marketing strategy"}
              text={"Ligula risus auctor tempus magna feugiat lacinia."}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            className={style.col}
            xs={10}
            sm={10}
            md={10}
            lg={10}
            xl={10}
            xxl={10}
          >
            BIG PICTURE
          </Col>
        </Row>
      </div>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          SLIDER
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          <TextContent
            header={"Build a customer-centric marketing strategy"}
            text={"Ligula risus auctor tempus magna feugiat lacinia."}
          />
        </Col>
      </Row>
      <Row>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          CLIP
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          CLIP
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          CLIP
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          IMG
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          <TextContent
            header={"Build a customer-centric marketing strategy"}
            text={"Ligula risus auctor tempus magna feugiat lacinia."}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          className={style.col}
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
          xxl={10}
        >
          BIG PICTURE
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          IMG
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          <TextContent
            header={"Build a customer-centric marketing strategy"}
            text={"Ligula risus auctor tempus magna feugiat lacinia."}
          />
        </Col>
      </Row>
      <Row>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          SLIDING CLIP
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          SLIDING CLIP
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          SLIDING CLIP
        </Col>
      </Row>
      <Row>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          SOME BANNERS
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          SOME BANNERS
        </Col>
        <Col className={style.col} xs={12} sm={12} md={6} lg={3} xl={4} xxl={4}>
          SOME BANNERS
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          SOME COMPONENT WITH CLIPS
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          <TextContent
            header={"Build a customer-centric marketing strategy"}
            text={"Ligula risus auctor tempus magna feugiat lacinia."}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
        <Col className={style.col} md={5} lg={5} xl={5} xxl={5}>
          TEXT
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          BIG BANNER
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          LINKS
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className={style.col} xs={10} sm={8} md={6} lg={6} xl={7} xxl={6}>
          FOOTER
        </Col>
      </Row>
    </Container>
  );
}

export default App;
