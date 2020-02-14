import React from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Impressum from '../components/Impressum';
import MapLocation from '../components/MapLocation';

function Kontakt(props) {
    return (
      <Layout>
        <div className="fill-container">
          <Row>
            <Col xs={12} md={4}>
              <Impressum />
            </Col>
            <Col xs={12} md={8}>
              <MapLocation height="700" />
            </Col>
          </Row>
        </div>
      </Layout>
    );
}

export default Kontakt;