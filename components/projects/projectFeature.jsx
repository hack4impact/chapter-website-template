import React from 'react';
import FeatureSlider from '../featureSlider';
import { Row, Col, Card, CardBody } from 'reactstrap';
import ContentBlock from '../ContentBlock';

const ProjectFeature = ({ featureImgSize, features }) =>
  features?.length ? (
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
          features.map(({ header, body }) => (
            <Col md="3" sm="6" style={{ marginBottom: '25px' }} key={header}>
              <Card className="text-white bg-secondary mb-3 h-100 light-shadow">
                <CardBody>
                  <h5 className="project-detail-title card-title text-center">{header}</h5>
                  <ContentBlock className="text-center" id="card-text" content={body.json} />
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <FeatureSlider featureImgSize={featureImgSize} features={features} />
        )}
      </Row>
    </section>
  ) : null;

export default ProjectFeature;
