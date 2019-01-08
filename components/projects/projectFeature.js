import FeatureSlider from "../featureSlider";
import { Row, Col, Card, CardBody } from "reactstrap";

const ProjectFeature = ({ featureImgSize, features }) =>
  features === null || features === undefined || features.length === 0 ? (
    <></>
  ) : (
    <section>
      <Row>
        <Col md="12">
          <div className="text-center">
            <h5 className="project-detail-title"> Main Features </h5>
          </div>
        </Col>
      </Row>
      <Row>
        {features[0].imgPath === undefined ? (
          features.map(feature => (
            <Col md="3" sm="6" style={{ marginBottom: "25px" }}>
              <Card className="text-white bg-secondary mb-3 h-100 light-shadow">
                <CardBody>
                  <h5 className="project-detail-title card-title text-center">
                    {feature.title}
                  </h5>
                  <p className="text-center" id="card-text">
                    {feature.detail}
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <FeatureSlider featureImgSize={featureImgSize} features={features} />
        )}
      </Row>
    </section>
  );

export default ProjectFeature;
