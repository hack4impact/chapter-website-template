import React from 'react';
import { Row, Col } from 'reactstrap';
import { Spring } from 'react-spring/renderprops.cjs';
import ContentBlock from './ContentBlock';

function FeatureSlider({ features }) {
  const [currFeatureHeader, setCurrFeatureHeader] = React.useState(features[0].header);

  return (
    <Row className="d-flex justify-content-center">
      <Col md={4}>
        <div className="img-holder">
          {features.map(
            ({ header, image }) =>
              header === currFeatureHeader && (
                <Spring
                  from={{ opacity: 0, transform: 'translate3d(0,100px,0)' }}
                  to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
                  {(props) => (
                    <div style={props}>
                      <img className="img-fluid shadow" src={image.url} alt={image.description} />
                    </div>
                  )}
                </Spring>
              ),
          )}
        </div>
      </Col>

      <Col md={4}>
        <div className="feature-list-box">
          {features.map(({ header, body }) => (
            <Row key={header}>
              <button
                className={`feature-slider-btn ${currFeatureHeader === header ? 'is-active' : ''}`}
                onClick={() => setCurrFeatureHeader(header)}>
                <div className="pl-3">
                  <h3 className="feature-title">{header}</h3>
                  <ContentBlock content={body.json} />
                </div>
              </button>
            </Row>
          ))}
        </div>
      </Col>
      <style jsx>{`
        .animate,
        .is-active {
          transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .img-holder {
          margin-top: 25px;
        }
        .feature-slider-btn {
          border: none;
          margin-top: 5px;
          opacity: 0.8;
          text-align: left;
          margin-bottom: 5px;
        }
        .feature-list-box {
          margin-top: 20px;
          min-height: 480px;
        }
        .is-active {
          border-left: 4px solid #64ab8a;
          box-sizing: content-box;
          outline: 0;
        }
        .feature-slider-btn:hover h3 {
          color: #155da1 !important;
        }
        .feature-slider-btn:hover 0 {
          color: black !important;
        }
        .is-active h3 {
          color: #155da1 !important;
        }
        .is-active p {
          color: black !important;
        }
        .feature-title {
          color: #a8a9b0;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .feature-detail {
          color: #a8a9b0;
          font-size: 16px;
          font-weight: 400;
        }
      `}</style>
    </Row>
  );
}

export default FeatureSlider;
