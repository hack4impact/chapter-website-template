import { Col, Container, Row, CardDeck, Card, CardBody } from "reactstrap";
import FeatureSlider from "../featureSlider";

const ProjectFeature = ({ features }) =>
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

      <CardDeck>
        {features[0].imgPath === undefined ? (
          features.map(feature => (
            <Card className="text-white bg-secondary mb-3 light-shadow">
              <CardBody>
                <h5 className="project-detail-title card-title text-center">
                  {feature.title}
                </h5>
                <p className="text-center" id="card-text">
                  {feature.detail}
                </p>
              </CardBody>
            </Card>
          ))
        ) : (
          <FeatureSlider features={features} />
        )}
      </CardDeck>
    </section>
  );

export default ProjectFeature;
