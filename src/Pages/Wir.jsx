import React from 'react';
import Layout from '../components/Layout';

import CustomButton from '../utils/button/button';

function Wir(props) {
    return (
      <div>
        <Layout>
          <div className="wir-header">
            <h1>El Dorado Steakhaus</h1>
          </div>
          <div className="wir-description">
            <p>
              Herzlich Willkommen bei uns im Steakhaus El Dorado.
              <br />
              Unser oberstes Ziel ist es, Sie als Gast zu empfangen und als
              Freund zu gewinnen.
              <br />
              <br />
              In unserem Steakhaus spürt der Gast unsere Leidenschaft für
              kompromisslose Fleischqualität, stimmiges Ambiente und exzellenten
              Service.
              <br />
              Wir freuen uns, Sie demnächst wieder herzlich bei uns begrüßen zu
              dürfen.
              <br />
            </p>
          </div>
          <div className="wir-header" style={{marginBottom: '10px'}}>
            <h1>Folge uns auf Instagram!</h1>
          </div>
          <div className="custom-btn">
              <CustomButton
                title="steakhaus_eldorado"
              />
          </div>
        </Layout>
      </div>
    );
}

export default Wir;