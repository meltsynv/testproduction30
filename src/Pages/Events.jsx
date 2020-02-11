import React from 'react';
import HomeHeadliner from '../resources/EventsImg.jpg';
import Zoom from 'react-reveal/Zoom';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Geburtstag from '../resources/Geburtstag.png';
import Meeting from '../resources/Meeting.png';
import Taufe from '../resources/Taufe.png';
import Hochzeit from '../resources/Hochzeit.png';
import Beerdigung from '../resources/Beerdigung.png';
import PhoneNumber from '../components/phoneNumber';

function Events(props) {
    return (
      <div>
        <div
          className="head-liner"
          style={{ backgroundImage: `url(${HomeHeadliner})` }}
        >
          <Zoom delay="200">
            <div className="headline-content">
              <center>
                <h1>Events</h1>
              </center>
            </div>
          </Zoom>
        </div>
        <Layout>
          <Row>
            <Col xs={12} md={6}>
              <h1>Events</h1>
              <p>
                Ob Sie alleine oder zu zweit oder in großer Runde speisen
                möchten. In unserem Lokal bieten wir passende Räumlichkeiten für
                Hochzeiten, Geschäftstagungen und zu allen anderen
                Familienanlässen an.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <h1>Gutscheine</h1>
              <p>
                Sie möchten einen Gutschein verschenken? Ein perfektes Geschenk
                für jeden Anlass. Bitte fragen Sie uns, wir helfen Ihnen gerne
                weiter.
              </p>
            </Col>
          </Row>
          <Row className="event-img">
            <Col>
              <img src={Geburtstag} alt="event icon Geburtstag" />
              <p>Geburtstag</p>
            </Col>
            <Col>
              <img src={Meeting} alt="event icon Meeting" />
              <p>Meeting</p>
            </Col>
            <Col>
              <img src={Taufe} alt="event icon Taufe" />
              <p>Taufe</p>
            </Col>
            <Col>
              <img src={Hochzeit} alt="event icon Hochzeit" />
              <p>Hochzeit</p>
            </Col>
            <Col>
              <img src={Beerdigung} alt="event icon Beerdigung" />
              <p>Beerdigung</p>
            </Col>
          </Row>
          <div className="event-headline">
            <h1>Anfragen telefonisch unter:</h1>
            <p>
              <PhoneNumber />
            </p>
          </div>
        </Layout>
      </div>
    );
}

export default Events;