import { Row, Container, Col } from "reactstrap";

const ClientFeatures = ({ features }) =>
  features !== null &&
  features !== undefined &&
  features.length !== 0 && (
    <Container>
      <div className="client-feature-box">
        <Row>
          {features.map(feature => (
            <Col>
              <div>
                <h3 className="feature-title">{feature.title}</h3>
                <h3 className="feature-detail">{feature.detail}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <style jsx>{`
        .feature-title {
          line-height: 1.5;
          letter-spacing: 0.9px;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          margin-top: 10px;
          text-transform: uppercase;
          font-weight: 650;
          color: #155da1;
        }
        .client-feature-box {
          margin: auto 60px;
          margin-top: 60px;
          font-family: "Chivo", sans-serif;
        }
        .feature-detail {
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 1px;
          margin-top: 10px;
        }
      `}</style>
    </Container>
  );
export default ClientFeatures;
