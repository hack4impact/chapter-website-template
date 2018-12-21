import React from "react";
import { Container, Button, Row, Col, Jumbotron, Media } from "reactstrap";
import ActionButton from "../actionButton";
import { Spring, config, Trail } from "react-spring";

const Banner = () => (
  <Container
    fluid
    className="bannerCont"
    style={{ marginTop: "100px", marginBottom: "30px", maxWidth: "1200px" }}
  >
    <Row>
      <Col md="7" style={{ paddingTop: 5 }}>
        <img src="/static/images/banner_sample.svg" />
      </Col>
      <Col md="5">
        <div id="homepage-main-headline">
          <h1>Software for Nonprofits </h1>
        </div>
        <div id="homepage-sub-headline">
          <p>
            We are a team of UIUC students who create robust software for social
            good. We believe that our engineering skill sets do not render us
            useless in addressing social injustices. Instead, they empower us to
            build a better society together.
          </p>
        </div>
        <div className="cta-box">
          <Spring
            config={config.stiff}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <ActionButton style={props} link="/about" text="Learn More" />
            )}
          </Spring>
          <Spring
            config={config.stiff}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <ActionButton
                white
                link="/apply"
                text="Apply"
                style={{ marginLeft: "20px", ...props }}
              />
            )}
          </Spring>
        </div>
      </Col>
    </Row>
    <style jsx>
      {`
        @media (max-width: 768px) {
          .banner-section {
            background-size: contain;
          }
        }
        .bannerCont {
          max-width: 1500px;
          margin: 0px;
          color: #fff !important;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          margin-top: 30px;
        }
        .banner-img {
          width: 100%;
          height: auto;
        }
        .banner-section {
          height: 650px;
          padding-top: 150px;
          background-size: cover;
        }

        .cta-box {
          padding-top: 7px;
          align-content: left;
        }

        #main-banner-headline {
          margin-bottom: 24px;
          font-family: "Chivo", sans-serif;
        }

        #homepage-main-headline h1 {
          font-size: 60px !important;
          font-weight: 600;
          color: #323648;
          font-family: "Chivo", sans-serif;
        }
        #sub-headline {
          max-width: 600px;
          margin: 0 auto;
        }

        #homepage-sub-headline {
          max-width: 600px;
          margin: 0 auto;
        }

        #homepage-sub-headline p {
          font-size: 17px;
          margin-bottom: 28px auto;
          color: #323648;
          font-weight: 350;
        }
      `}
    </style>
  </Container>
);

export default Banner;
