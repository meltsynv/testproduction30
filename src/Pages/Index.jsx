import React from "react";
import HomeHeadliner from "../resources/HomeHeadliner.jpg";
import ElDorado from "../resources/ElDorado_Logo.png";
import Zoom from "react-reveal/Zoom";
import Layout from "../components/Layout";
import PromoBanner from "../components/PromoBanner";
import EventImg from "../resources/EventImg.jpg";
import SpeisekarteImg from "../resources/SpeisekarteImg.jpg";
import Oeffnungszeiten from "../components/Oeffnungszeiten";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";
import intsaBilder from "../resources/intsaBilder.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PhoneNumber from "../components/phoneNumber";

function Home(props) {
  return (
    <div>
      <div
        className="head-liner"
        style={{ backgroundImage: `url(${HomeHeadliner})` }}
      >
        <Zoom delay="200">
          <div className="headline-content">
            <center>
              <img src={ElDorado} alt="" />
            </center>
          </div>
        </Zoom>
      </div>
      <Layout>
        <div className="home-wellcome">
          <div className="home-wellcome-top">
            <h1>Willkommen im El Dorado Steakhaus!</h1>
          </div>
          <div className="home-wellcome-down">
            <div className="title">
              <h1 className="title-name">Reservierungen telefonisch unter:</h1>
              <PhoneNumber />
            </div>
            <Oeffnungszeiten />
          </div>
        </div>
      </Layout>
      <PromoBanner
        title="Speisekarte"
        text="Genießen Sie klassische und ausgefallene Fleischgerichte sowie das saisonal wechselnde Salatbüffet in unserem gemütlichen Steakhaus. Sowohl im urigen Lokal mit den Steinwänden als auch im malerischem Innenhof servieren wir Ihnen in familiärem Ambiente internationale Spezialitäten."
        bgImg={SpeisekarteImg}
        linkPage="/speisekarte"
        reverse="reverse"
      />
      <Layout>
        <Row>
          <Col style={{ margin: "auto" }} s={12} md={6}>
            <Zoom delay="50">
              <Product
                bgImg={intsaBilder}
                title="BLACK ANGUS STEAK"
                text="Unsere saftigen und zarten Steaks, die wir für Sie am Holzkohlegrill zubereiten, sind vom Black Angus Rind,
                                    das auf saftigen Weiden Südamerikas gezüchtet wird. Wenn Sie keine besonderen Wünsche äußern,
                                    wird Ihr Steak „Medium“ gegrillt."
              />
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Zoom delay="100">
              <ProductDescription
                productD_title="Hüftsteak"
                productD_text="Das klassische fettarme Steak mit nahezu keiner Marmorierung."
              />
              <hr />
              <ProductDescription
                productD_title="Rumpsteak"
                productD_text="Herzhaftes Stück aus dem Roastbeef geschnitten mit klassischem Fettrand."
              />
            </Zoom>
          </Col>
          <Col xs={12} md={6}>
            <Zoom delay="200">
              <ProductDescription
                productD_title="Filet"
                productD_text="Zartes und saftiges Stück mit feinster Marmorierung."
              />
              <hr />
              <ProductDescription
                productD_title="Ribeyessteak"
                productD_text="Das Entrecôte - sehr kräftig und würzig im Geschmack."
              />
            </Zoom>
          </Col>
        </Row>
      </Layout>
      <PromoBanner
        title="Events"
        text="Ob Sie alleine oder zu zweit oder in großer Runde speisen möchten. In unserem Lokal bieten wir passende Räumlichkeiten für Hochzeiten, Geschäftstagungen und zu allen anderen Familienanlässen an."
        bgImg={EventImg}
        linkPage="/events"
        reverse="margin-b0"
      />
    </div>
  );
}

export default Home;
