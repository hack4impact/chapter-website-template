import { Container, Row, Col } from "reactstrap";

const GradientSection = () => (
  <section className="banner-section">
    <Container className="align-middle">
      <Row>
        <Col md="12" className="text-center">
          <div className="main-headline">
            <h1> Our Work </h1>
          </div>
        </Col>
        <Row>
          <Col md="12" className="text-center sub-headline">
            <p>
              In today’s world, we are capable of changing the lives of those
              halfway across the country. While tech has enabled us to have a
              larger reach, we also understand that we have a responsibility to
              build tools that are more than just pet projects. We strive to
              deliver incredible value to the nonprofits we are fortunate enough
              to work with and look forward to seeing our products continue to
              be used for years to come.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
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
      #main-headline h1 {
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
    `}</style>
  </section>
);

export default GradientSection;
