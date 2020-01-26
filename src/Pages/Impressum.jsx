import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout";
import Impressum from "../components/Impressum";

const ImpressumPage = () => {
  return (
    <Layout>
      <Row>
        <Col xs={12} md={4}>
          <Impressum />
          <p>Email: nemanjajeremic@hotmail.de</p>
          <br />
          <p>Vertretungsberechtigt:</p>
          <p>Nemanja Jeremic</p>
          <br />
          <p>Handelsregister:</p>
          <p></p>
        </Col>
      </Row>
    </Layout>
  ); 
};

export default ImpressumPage;