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

function Events(props) {
    return (
        <div>
            <div className='head-liner' style={{ backgroundImage: `url(${HomeHeadliner})` }}>
                <Zoom delay='200'>
                    <div className='headline-content'>
                        <center><h1>Events</h1></center>
                    </div>
                </Zoom>
            </div>
            <Layout>
                <Row>
                    <Col xs={12} md={6}>
                        <h1>Events</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>Catering</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                <Row className='event-img'>
                    <Col><img src={Geburtstag} /><p>Geburtstag</p></Col>
                    <Col><img src={Meeting} /><p>Meeting</p></Col>
                    <Col><img src={Taufe} /><p>Taufe</p></Col>
                    <Col><img src={Hochzeit} /><p>Hochzeit</p></Col>
                    <Col><img src={Beerdigung} /><p>Beerdigung</p></Col>
                </Row>
                <div className='event-headline'>
                    <h1>Anfragen telefonisch unter:</h1>
                    <p>20327 10115</p>
                </div>
            </Layout>
        </div>
    );
}

export default Events;