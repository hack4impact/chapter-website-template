import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  CardText,
  CardBody
} from "reactstrap";
import Section from "../section";
// values used in the component below
const values = [
  {
    title: "Curiosity",
    text: (
      <>
        We are eager to learn about technology, ourselves, and the world around
        us. We dive deep into our fields of study and work, and seek feedback
        from our teammates, students, and teachers. We are hungry, yet humble;
        we are able to set aside our egos and view each moment and interaction
        as an opportunity to learn. <br />
        <br /> We are incredibly curious about our clients. We know we might not
        know everything, so we must ask the right questions to even begin to
        grasp the complexity of our clients’ situations. Curiosity also enables
        us to look beyond our immediate vicinity and deliver the best solution
        to our clients, even if the solution isn’t built by Hack4Impact.
      </>
    ),
    imagePath: "/static/images/values/value-1.svg"
  },
  {
    title: "Empathy",
    text: (
      <>
        We are eager to learn about technology, ourselves, and the world around
        us. We dive deep into our fields of study and work, and seek feedback
        from our teammates, students, and teachers. We are hungry, yet humble;
        we are able to set aside our egos and view each moment and interaction
        as an opportunity to learn. <br />
        <br /> We are incredibly curious about our clients. We know we might not
        know everything, so we must ask the right questions to even begin to
        grasp the complexity of our clients’ situations. Curiosity also enables
        us to look beyond our immediate vicinity and deliver the best solution
        to our clients, even if the solution isn’t built by Hack4Impact.
      </>
    ),
    imagePath: "/static/images/values/value-2.svg"
  },
  {
    title: "Intentionality",
    text: (
      <>
        We evaluate the trade offs of our decisions, choose a direction to head,
        and crush our goals. Whether it be personal or professional growth, we
        avoid mindless movement and instead purposefully act. <br />
        <br /> We work with intention. We understand that at the end of the day,
        Hack4Impact exists to build solutions that are right for our clients and
        their users. We carefully assess the concerns of our users,
        stakeholders, and clients, to develop a custom solution that fits our
        precise constraints.
      </>
    ),
    imagePath: "/static/images/values/value-3.svg"
  }
];

const OurValues = () => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className="text-center section-title">
          <h2>Our Values</h2>
        </div>
      </Row>

      <CardDeck>
        {values.map(value => (
          <Card key={value.title}>
            <img
              className="card-img-top"
              src={value.imagePath}
              alt="Community"
            />
            <CardBody>
              <h5 className="text-title card-title"> {value.title} </h5>
              <CardText>{value.text}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </Container>
  </Section>
);

export default OurValues;
