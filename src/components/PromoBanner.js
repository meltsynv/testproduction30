import React from 'react'
import Fade from 'react-reveal/Fade';
import WeiterBtn from '../resources/weiterBtn.svg'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PromoBanner = (props) => {
    return (
        <Fade>
            <div className='promotion-wrapper'>
                <Row className={`PromoBanner-wrapper ${props.reverse}`}>
                    <Col lg={6} md={12} xs={12} className='left'>
                        <div>
                            <h2>{props.title}</h2>
                            <p>{props.text}</p>
                            <center><Link to={props.linkPage}><img src={WeiterBtn} width='50px' height='auto' alt='weiter icont'/></Link></center>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12} className='right' style={{ backgroundImage: `url(${props.bgImg})` }}></Col>
                </Row>
            </div>
        </Fade>
    );
}

export default PromoBanner;