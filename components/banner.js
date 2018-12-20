import React from "react";
import { Container, Button, Row, Col, Jumbotron, Media } from "reactstrap";
import ActionButton from "./actionButton";
import WhiteButton from "./whiteButton";
import { Spring, config } from "react-spring";

const Banner = () => (
  <Container
    fluid
    className="bannerCont"
    style={{ marginTop: "100px", marginBottom: "30px", maxWidth: "1200px" }}
  >
    <Row>
      <Col md="6" style={{ paddingTop: 5 }}>
        <img src="/static/banner_sample.svg" />
      </Col>
      <Col md="6">
        <div id="homepage-main-headline">
          <h1>Software for Nonprofits </h1>
        </div>
        <Spring
          config={config.gentle}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <div style={props} id="homepage-sub-headline">
              <p>
                We are a team of UIUC students who create robust software for
                social good. We believe that our engineering skill sets do not
                render us useless in addressing social injustices. Instead, they
                empower us to build a better society together.
              </p>
            </div>
          )}
        </Spring>
        <div className="cta-box">
          <Spring
            config={{ delay: 250, tension: 100, fraction: 100 }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <ActionButton style={props} link="/about" text="Learn More" />
            )}
          </Spring>
          <Spring
            config={{ delay: 300, tension: 70 }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <WhiteButton
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

        #main-headline h1 {
          font-size: 60px !important;
          font-weight: 600;
          color: #323648;
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
// #main-banner-photo{
//   background-image: url("/static/fa18-team.png");
//   display: flex;
//   background-attachment: fixed;
//   background-position: center center;
// }

export default Banner;
