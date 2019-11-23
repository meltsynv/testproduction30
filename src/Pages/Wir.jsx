import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../components/Layout';

function Wir(props) {
    return (
        <div>
            <Layout>
                <div className='wir-header'>
                    <h1>El Dorado Steakhaus</h1>
                </div>
                <div className='wir-description'>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='wir-header'>
                    <h1>Folge uns auf Instagram!</h1>
                    <Link to='https://www.instagram.com/steakhaus_eldorado/?hl=de' target='_blank'>steakhaus_eldorado</Link>
                </div>
            </Layout>
        </div>
    );
}

export default Wir;