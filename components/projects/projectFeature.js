import { Col, Row, CardDeck, Card, CardBody } from "reactstrap";

const ProjectFeature = ({ features }) =>
  features === null || features === undefined ? (
    <></>
  ) : (
    <section>
      <Row>
        <Col md="12">
          <div className="text-center">
            <h5 className="text-title"> Main Features </h5>
          </div>
        </Col>
      </Row>

      <CardDeck>
        {features.map(feature => (
          <Card className="text-white bg-secondary mb-3">
            <CardBody>
              <h5 className="text-title card-title text-center">
                {feature.title}
              </h5>
              <p className="text-center" id="card-text">
                {feature.detail}
              </p>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </section>
  );

export default ProjectFeature;
