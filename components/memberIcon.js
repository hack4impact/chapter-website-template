import { Container, Row, Col, Card } from "reactstrap";
import { ImagePathConversion } from "../data/helper";

const TeamMemberIcon = ({ name, role, linkedin, nopic }) => (
  <Col xs={nopic ? "6" : "6"} md="3">
    <Card className="border-0 member-icon">
      <div className="text-center">
        <a href={linkedin !== undefined ? linkedin : null}>
          <img
            src={ImagePathConversion(name)}
            className="rounded-circle img-fluid team-icon"
          />
        </a>
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
      .team-icon:hover {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    `}</style>
  </Col>
);

export default TeamMemberIcon;
