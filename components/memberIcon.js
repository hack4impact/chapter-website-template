import { Container, Row, Col, Card } from "reactstrap";
import { ImagePathConversion } from "../data/helper";

const TeamMemberIcon = ({ name, role, linkedin, nopic }) => (
  <Col xs={nopic ? "6" : "6"} md="3">
    <Card className="border-0 member-icon">
      <div className="text-center">
        <img
          src={ImagePathConversion(name)}
          className="rounded-circle img-fluid team-icon"
        />
      </div>
    </Card>

    <div className="card-body">
      <p className="text-center">
        <b> {name} </b> <br /> {role}{" "}
        {linkedin !== undefined ? (
          <a href={linkedin}>
            {" "}
            |{" "}
            <img
              width="12"
              className="linkedin-icon"
              src="/static/icons/linkedin.svg"
            />
          </a>
        ) : null}
      </p>
    </div>
    <style jsx>{`
      .team-icon {
        width: 80%;
      }
      .linkedin-icon {
        margin-bottom: 3px;
      }
    `}</style>
  </Col>
);

export default TeamMemberIcon;
