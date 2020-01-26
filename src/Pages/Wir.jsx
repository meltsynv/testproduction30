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
                    <p>
                        Herzlich Willkommen bei uns im Steakhaus El Dorado.<br />
                        Unser oberstes Ziel ist es, Sie als Gast zu empfangen und als Freund zu gewinnen.<br /><br />

                        In unserem Steakhaus spürt der Gast unsere Leidenschaft für kompromisslose Fleischqualität, stimmiges Ambiente und exzellenten Service.<br />
                        Wir freuen uns, Sie demnächst wieder herzlich bei uns begrüßen zu dürfen.<br />
                    </p>
                </div>
                <div className='wir-header'>
                    <h1>Folge uns auf Instagram!</h1>
                    <Link href='https://www.instagram.com/steakhaus_eldorado/?hl=de' target='_blank'>steakhaus_eldorado</Link>
                </div>
            </Layout>
        </div>
    );
}

export default Wir;