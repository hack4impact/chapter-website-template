import { Container, Row, Col } from "reactstrap";

const GradientSection = ({ title, subHeadline }) => (
  <div>
    <section className="banner-section">
      <Container className="align-middle">
        <Row>
          <Col md="12" className="text-center">
            <div className="main-headline">
              <h1>{title}</h1>
            </div>
          </Col>
          <Row>
            <div className="text-center sub-headline">
              <p>{subHeadline}</p>
            </div>
          </Row>
        </Row>
      </Container>
    </section>
    <div className="arrow" />
    <style jsx>{`
      section {
        background: radial-gradient(white, #aac3ff);
        padding: 12% 0;
        padding: 8% 0;
      }

      @media (max-width: 990px) {
        section {
          padding: 20% 0;
        }
      }
      .main-headline h1 {
        font-size: 60px !important;
        font-weight: 600;
        color: #323648;
        font-family: "Chivo", sans-serif;
      }
      .sub-headline {
        max-width: 100%;
        padding: 0 10%;
      }
      p {
        font-size: 20px;
        margin-bottom: 28px auto;
        color: #323648;
        font-weight: 350;
      }
      .arrow {
        margin: auto;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-top: 60px solid #c3d5fd;
      }
    `}</style>
  </div>
);

export default GradientSection;
