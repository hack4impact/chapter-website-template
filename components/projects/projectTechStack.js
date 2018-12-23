import { Row, Card, Col } from "reactstrap";
// need to add to this whenever a new library/technology is used
// this must match the strings listed in props.techStack, which is an array
const techStackMasterList = {
  react: {
    link: "https://reactjs.org/",
    title: "React",
    imgPath: "/static/images/techStack/react.jpg"
  },
  redux: {
    link: "https://redux.js.org/",
    title: "Redux",
    imgPath: "/static/images/techStack/redux.jpg"
  },
  flask: {
    link: "http://flask.pocoo.org/",
    title: "Flask",
    imgPath: "/static/images/techStack/flask.jpg"
  },
  mongodb: {
    link: "https://www.mongodb.com/",
    title: "MongoDB",
    imgPath: "/static/images/techStack/mongodb.jpg"
  },
  reactnative: {
    link: "https://facebook.github.io/react-native/",
    title: "React Native",
    imgPath: "/static/images/techStack/react.jpg"
  },
  postgres: {
    link: "https://www.postgresql.org/",
    title: "Postgres",
    imgPath: "/static/images/techStack/postgres.jpg"
  },
  relay: {
    link: "https://facebook.github.io/relay/",
    title: "Relay",
    imgPath: "/static/images/techStack/relay.jpg"
  },
  nodejs: {
    link: "https://nodejs.org/en/",
    title: "Node.js",
    imgPath: "/static/images/techStack/nodejs.jpg"
  },
  graphql: {
    link: "https://graphql.org/",
    title: "GraphQL",
    imgPath: "/static/images/techStack/graphql.jpg"
  },
  redis: {
    link: "https://redis.io/",
    title: "Redis",
    imgPath: "/static/images/techStack/redis.jpg"
  },
  python: {
    link: "https://www.python.org/",
    title: "Python",
    imgPath: "/static/images/techStack/python.jpg"
  }
};

const ProjectTechStack = ({ techStack }) =>
  techStack === undefined || techStack === null ? (
    <></>
  ) : (
    <>
      <div className="tech-stack margin-sm-all">
        <Row>
          <div className="col-md-12">
            <div className="text-center">
              <h5 className="text-title"> Tech Stack </h5>
            </div>
          </div>
        </Row>

        <Row>
          {techStack.map(tech => (
            <Col md="2" xs="6">
              <Card className="border-0">
                <img
                  src={techStackMasterList[tech].imgPath}
                  className="img-thumbnail img-fluid"
                />
                <a
                  href={techStackMasterList[tech].link}
                  className="text-center"
                >
                  {techStackMasterList[tech].title}
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <style jsx>{`
        .tech-stack div {
          padding: 5px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );

export default ProjectTechStack;
