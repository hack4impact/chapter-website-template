import React from "react";
import { Row, Col } from "reactstrap";
import { Spring, config } from "react-spring";

class FeatureSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle:
        this.props.features != undefined ? this.props.features[0].title : ""
    };
  }

  featureClick = title => {
    this.setState({
      currentTitle: title
    });
  };

  render() {
    let { featureImgSize } = this.props;
    if (featureImgSize === undefined || featureImgSize === null) {
      featureImgSize = 6;
    }
    const featureTextSize = 12 - featureImgSize > 6 ? 6 : 12 - featureImgSize;
    console.log(parseInt(featureTextSize) + parseInt(featureImgSize));
    return (
      <Row>
        {parseInt(featureTextSize) + parseInt(featureImgSize) < 12 ? (
          <Col
            md={(12 - parseInt(featureImgSize) - parseInt(featureTextSize)) / 2}
          />
        ) : null}
        <Col md={featureImgSize}>
          <div className="img-holder">
            {this.props.features.map(
              feature =>
                feature.title === this.state.currentTitle && (
                  <Spring
                    config={{ ...config.molasses }}
                    from={{ opacity: 0, transform: "translate3d(0,100px,0)" }}
                    to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
                  >
                    {props => (
                      <div style={props}>
                        <img
                          className="img-fluid shadow"
                          src={feature.imgPath}
                        />
                      </div>
                    )}
                  </Spring>
                )
            )}
          </div>
        </Col>

        <Col md={featureTextSize}>
          <div className="feature-list-box">
            {this.props.features.map(feature => (
              <Row key={feature.title}>
                <button
                  className={`feature-slider-btn ${
                    this.state.currentTitle === feature.title ? "is-active" : ""
                  }`}
                  onClick={() => this.featureClick(feature.title)}
                >
                  <div className="pl-3">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-detail">{feature.detail}</p>
                  </div>
                </button>
              </Row>
            ))}
          </div>
        </Col>
        <style jsx>{`
          .animate {
            transition: all 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .img-holder {
            margin-top: ${featureImgSize <= 5
              ? "25px"
              : "60px"}; // pushes img down a little bit
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
            transition: all 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
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
}

export default FeatureSlider;
