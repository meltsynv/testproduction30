import React from 'react';
import HomeHeadliner from '../resources/HomeHeadliner.jpg';
import ElDorado from '../resources/ElDorado_Logo.png';
import Zoom from 'react-reveal/Zoom';
import Layout from '../components/Layout';
import PromoBanner from '../components/PromoBanner';
import EventImg from '../resources/EventImg.jpg';
import SpeisekarteImg from '../resources/SpeisekarteImg.jpg';
import Oeffnungszeiten from '../components/Oeffnungszeiten';
import Product from '../components/Product';
import ProductDescription from '../components/ProductDescription';
import intsaBilder from '../resources/intsaBilder.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home(props) {
    return (
        <div>
            <div className='head-liner' style={{ backgroundImage: `url(${HomeHeadliner})` }}>
                <Zoom delay='200'>
                    <div className='headline-content'>
                        <center><img src={ElDorado} /></center>
                    </div>
                </Zoom>
            </div>
            <Layout>
                <div className='home-wellcome'>
                    <div className='home-wellcome-top'>
                        <h1>Willkommen im El Dorado Steakhaus!</h1>
                    </div>
                    <div className='home-wellcome-down'>
                        <div className='title'>
                            <h1 className='title-name'>Reservierungen telefonisch unter:</h1>
                            <p>02327 10115</p>
                        </div>
                        <Oeffnungszeiten />
                    </div>
                </div>
            </Layout>
            <PromoBanner
                title='Speisekarte'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                bgImg={SpeisekarteImg}
                linkPage='/speisekarte'
                reverse='reverse'
            />
            <Layout>
                <Row>
                    <Col xs={12} md={6}>
                        <Zoom delay='100'>
                            <Product
                                bgImg={intsaBilder}
                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                            <ProductDescription
                                productD_title='Hüftsteak | Bife de Cuadril'
                                productD_text='Das beste aus der Rinderkeule'
                            />
                            <hr />
                            <ProductDescription
                                productD_title='Rumpsteak | Bife Angosto'
                                productD_text='Ein herzhaftes Stück aus dem Rinderrücken mit schmalem Fettrand'
                            />
                        </Zoom>
                    </Col>
                    <Col xs={12} md={6}>
                        <Zoom delay='200'>
                            <Product
                                bgImg={intsaBilder}
                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                            <ProductDescription
                                productD_title='Filet | Bife de Lomo'
                                productD_text='Filet. Ein zartes Stück von dem Rind'
                            />
                            <hr />
                            <ProductDescription
                                productD_title='Ribeyessteak | Bife Ancho'
                                productD_text='Von Fett durchzogenes Stück aus der Vorderrippe'
                            />
                        </Zoom>
                    </Col>
                </Row>
            </Layout>
            <PromoBanner
                title='Events'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                bgImg={EventImg}
                linkPage='/events'
                reverse='margin-b0'
            />
        </div>
    );
}

export default Home;