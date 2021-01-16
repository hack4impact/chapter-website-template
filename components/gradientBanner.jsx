import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Spring } from 'react-spring/renderprops.cjs';
import ContentBlock from './ContentBlock';

const GradientBanner = ({ title, subHeadline, style, arrow, children }) => (
  <div>
    <section className="banner-section" style={style}>
      <Container className="align-middle">
        <Row>
          <Col md="12" className="text-center">
            <Spring
              config={{ delay: 700 }}
              from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
              {(props) => (
                <div style={props} className="main-headline">
                  <h1>{title}</h1>
                </div>
              )}
            </Spring>
          </Col>
          {subHeadline && (
            <Row>
              <Spring
                config={{ delay: 500 }}
                from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
                to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
                {(props) => (
                  <div style={props} className="text-center sub-headline">
                    {/* if it has a json key, we'll assume it's Rich Text from Contentful */}
                    {subHeadline.json ? (
                      <ContentBlock content={subHeadline} />
                    ) : (
                      <p>{subHeadline}</p>
                    )}
                  </div>
                )}
              </Spring>
            </Row>
          )}
          <Row className="w-100 pt-4">
            <Spring
              config={{ delay: 550 }}
              from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
              {(props) => (
                <Col className="d-flex justify-content-center" style={props}>
                  {children}
                </Col>
              )}
            </Spring>
          </Row>
        </Row>
      </Container>
    </section>
    {arrow && <div className="arrow" />}
    <style jsx>{`
      $tablet-width: 800px;

      section {
        background: linear-gradient(white, var(--secondary-seafoam));
        padding: 80px 0;
        padding-top: calc(60px + var(--nav-height));

        @media (max-width: $tablet-width) {
          padding: 40px 0;
          padding-top: calc(40px + var(--nav-height));
        }
      }

      .main-headline h1 {
        font-size: 60px;
        font-weight: bold;

        @media (max-width: $tablet-width) {
          font-size: 36px;
        }
      }
      .sub-headline {
        max-width: 100%;
        padding: 0 10%;
        margin-top: 20px;
      }
      p {
        font-size: 20px;
        margin-bottom: 28px auto;
      }
      .arrow {
        margin: auto;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-top: 60px solid var(--secondary-seafoam);
      }
    `}</style>
  </div>
);

export default GradientBanner;
