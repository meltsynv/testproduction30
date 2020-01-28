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
          <p>Sitz der Gesellschaft: Bochum </p>
          <p>Eingetragen: Amtsgericht Marl</p>
          <p>StNr. 350/5111/3125</p>
          <p>Geschäftsführer: Nemanja Jeremic</p>
        </Col>
      </Row>
    </Layout>
  ); 
};

export default ImpressumPage;