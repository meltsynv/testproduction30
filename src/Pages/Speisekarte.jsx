import React from 'react';
import HomeHeadliner from '../resources/speisekarteImgBG.jpg';
import Zoom from 'react-reveal/Zoom';
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import pdf from '../resources/test.pdf';

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