import { Container, Row, Col, Card } from "reactstrap";
import ActionButton from "../actionButton";
import { ImagePathConversion } from "../../data/helper";

const TeamMemberIcon = ({ name, role, nopic }) => (
  <Col xs={nopic ? "6" : "6"} md="3">
    <Card className="border-0">
      <div className="text-center">
        <img
          src={ImagePathConversion(name)}
          className="rounded-circle img-fluid team-icon"
        />
      </div>
    </Card>

    <div className="card-body text-center">
      <p>
        <b> {name} </b> <br /> {role}
      </p>
    </div>
    <style jsx>{`
      .team-icon {
        width: 80%;
      }
    `}</style>
  </Col>
);
const ProjectTeam = ({ team }) => (
  <section className="project-team">
    <Container>
      <Row>
        <Col md="12">
          <h5 className="text-title center mb-5"> Project Team </h5>
        </Col>
      </Row>

      <Row>
        {team.type === "no-pic" ? (
          <div>
            <Row>
              <Col md="3" />
              <TeamMemberIcon
                nopic
                name={team.detail.pm}
                role="Product Manager"
              />
              <TeamMemberIcon nopic name={team.detail.tl} role="Tech Lead" />
            </Row>
            <Row>
              <Col md="12">
                <div className="text-center">
                  <p className="text-center">
                    <b> Developers: </b>{" "}
                    {team.detail.swe.map(swe => (
                      <>{swe}, </>
                    ))}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          team.detail.map(member => (
            <TeamMemberIcon name={member.name} role={member.role} />
          ))
        )}
      </Row>
      <Row>
        <ActionButton
          style={{ margin: "30px auto" }}
          white
          text="View Other Projects"
          link="/projects"
        />
      </Row>
    </Container>
  </section>
);

export default ProjectTeam;
