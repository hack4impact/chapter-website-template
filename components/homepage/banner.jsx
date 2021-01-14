import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Spring, config } from 'react-spring/renderprops.cjs';
import ActionButton from '../actionButton';

const Banner = () => (
  <>
    <Container fluid className="container">
      <div className="bannerCont">
        <Row className="d-flex align-items-center">
          <Spring
            config={{ delay: 100, ...config.slow }}
            from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
            to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
            {(props) => (
              <Col md="7" style={{ ...props }}>
                <img src="/images/banner_sample.svg" alt="" />
              </Col>
            )}
          </Spring>
          <Col md="5">
            <Spring
              config={{ delay: 450, ...config.slow }}
              from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
              {(props) => <h1 style={props}>Building tools for social good</h1>}
            </Spring>
            <Spring
              config={{ delay: 450, ...config.slow }}
              from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
              {(props) => (
                <p style={props} className="sub-headline">
                  We empower engineers, designers, activists, and humanitarians to create lasting
                  and impactful social change. If you're a student or a nonprofit, we'd love to get
                  in touch!
                </p>
              )}
            </Spring>
            <Spring
              config={{ delay: 500, ...config.slow }}
              from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
              {(props) => (
                <div style={props}>
                  <ActionButton className="mr-3" link="/apply">
                    Apply
                  </ActionButton>
                  <ActionButton white link="/about">
                    Learn More
                  </ActionButton>
                </div>
              )}
            </Spring>
          </Col>
        </Row>
      </div>
    </Container>
    <style jsx>{`
      $tablet-width: 800px;

      .bannerCont {
        padding: 120px 0;
        padding-top: calc(60px + var(--nav-height));

        @media (max-width: $tablet-width) {
          padding: 80px 0;
          padding-top: calc(40px + var(--nav-height));
        }

        h1 {
          font-size: 54px !important;
          margin-bottom: 30px;

          @media (max-width: 400px) {
            font-size: 42px !important;
          }
        }
        .sub-headline {
          font-size: 18px;
          margin-bottom: 40px;
        }
      }
      .banner-img {
        width: 100%;
        height: auto;
      }
      .banner-section {
        height: 650px;
        padding-top: 150px;
        background-size: cover;

        @media (max-width: $tablet-width) {
          background-size: contain;
        }
      }

      .cta-box {
        padding-top: 7px;
        align-content: left;
      }
    `}</style>
  </>
);

export default Banner;
