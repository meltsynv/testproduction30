import React from 'react';
import HomeHeadliner from '../resources/speisekarteImgBG_1.jpg';
import Zoom from 'react-reveal/Zoom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import pdf from "../resources/Jelovnik_El_Dorado_bez_cena_INTERNET.pdf";

function Speisekarte(props) {
    return (
        <div>
            <div className='head-liner' style={{ backgroundImage: `url(${HomeHeadliner})` }}>
                <Zoom delay='200'>
                    <div className='headline-content'>
                        <center><h1>Speisekarte</h1></center>
                    </div>
                </Zoom>
            </div>
            <Layout>
                <Row>
                    <Col style={{margin: 'auto'}} xs={12} md={6}>
                        <p>
                            Genießen Sie klassische und ausgefallene Fleischgerichte sowie das saisonal wechselnde Salatbüffet in unserem gemütlichen Steakhaus. Sowohl im urigen Lokal mit den Steinwänden als auch im malerischem Innenhof servieren wir Ihnen in familiärem Ambiente internationale Spezialitäten.
                        </p>
                    </Col>
                </Row>
                <div className='speisekarte-wrapper'>
                    <div className='speisekarte-download'>
                        <Link to={pdf} target="_blank" download>
                            Speisekarte downloaden
                    </Link>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Speisekarte;