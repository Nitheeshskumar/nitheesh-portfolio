import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { certifications, dataportfolio, meta, otherAccomplishments } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title> <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1> <hr className="t_border my-4 ml-0 text-left" />
            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>view project</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="12">
                {" "}
                <h3 className="display-6 mb-4"> Other Achievements </h3> <hr className="t_border my-4 ml-0 text-left" />
                <ul style={{ listStyleType: "disc" }}>
                  {otherAccomplishments.map((el) => (
                    <li key={el} className="mb-3">
                      {el}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <h1 className="display-4 mb-4"> Certifications </h1> <hr className="t_border my-4 ml-0 text-left" />
            <div className="mb-3 po_items_ho lg-3">
              {certifications.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>view credentials</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
