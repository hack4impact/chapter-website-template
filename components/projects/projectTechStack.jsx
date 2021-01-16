import React from 'react';
import { Row, Card, Col } from 'reactstrap';

// need to add to this whenever a new library/technology is used
// this must match the strings listed in props.techStack, which is an array
const techStackMasterList = {
  aws: {
    link: 'https://aws.amazon.com',
    title: 'AWS',
    imgPath: '/images/techStack/aws.png',
  },
  beautifulsoup: {
    link: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
    title: 'Beautiful Soup',
    imgPath: '/images/techStack/beautiful soup.jpg',
  },
  box: {
    link: 'https://box.com',
    title: 'Box',
    imgPath: '/images/techStack/box.jpg',
  },
  draftjs: {
    link: 'https://draftjs.org',
    title: 'DraftJS',
    imgPath: '/images/techStack/draftjs.png',
  },
  dynamodb: {
    link: 'https://aws.amazon.com/dynamodb/',
    title: 'DynamoDB',
    imgPath: '/images/techStack/dynamodb.png',
  },
  express: {
    link: 'https://expressjs.com',
    title: 'ExpressJS',
    imgPath: '/images/techStack/express.png',
  },
  firebase: {
    link: 'https://firebase.google.com',
    title: 'Firebase',
    imgPath: '/images/techStack/firebase.png',
  },
  flask: {
    link: 'http://flask.pocoo.org/',
    title: 'Flask',
    imgPath: '/images/techStack/flask.jpg',
  },
  gensim: {
    link: 'https://radimrehurek.com/gensim/',
    title: 'Gensim',
    imgPath: '/images/techStack/gensim.png',
  },
  graphql: {
    link: 'https://graphql.org/',
    title: 'GraphQL',
    imgPath: '/images/techStack/graphql.jpg',
  },
  h4i_infra_auth: {
    link: 'https://github.com/hack4impact-uiuc/infra-authentication-server',
    title: 'H4I Infra Auth',
    imgPath: '/images/techStack/h4i-logo.png',
  },
  mapbox: {
    link: 'https://www.mapbox.com',
    title: 'Mapbox',
    imgPath: '/images/techStack/mapbox.png',
  },
  mongodb: {
    link: 'https://www.mongodb.com/',
    title: 'MongoDB',
    imgPath: '/images/techStack/mongodb.jpg',
  },
  next: {
    link: 'https://nextjs.org',
    title: 'NextJS',
    imgPath: '/images/techStack/next.png',
  },
  nltk: {
    link: 'https://www.nltk.org',
    title: 'NLTK',
    imgPath: '/images/techStack/python.jpg',
  },
  nodejs: {
    link: 'https://nodejs.org/en/',
    title: 'NodeJS',
    imgPath: '/images/techStack/nodejs.jpg',
  },
  passport: {
    link: 'http://www.passportjs.org/',
    title: 'PassportJS',
    imgPath: '/images/techStack/passportjs.png',
  },
  postgres: {
    link: 'https://www.postgresql.org/',
    title: 'Postgres',
    imgPath: '/images/techStack/postgres.jpg',
  },
  python: {
    link: 'https://www.python.org/',
    title: 'Python',
    imgPath: '/images/techStack/python.jpg',
  },
  ramda: {
    link: 'https://ramdajs.com/',
    title: 'RamdaJS',
    imgPath: '/images/techStack/ramdajs.png',
  },
  react: {
    link: 'https://reactjs.org/',
    title: 'React',
    imgPath: '/images/techStack/react.jpg',
  },
  reactnative: {
    link: 'https://facebook.github.io/react-native/',
    title: 'React Native',
    imgPath: '/images/techStack/react.jpg',
  },
  redis: {
    link: 'https://redis.io/',
    title: 'Redis',
    imgPath: '/images/techStack/redis.jpg',
  },
  redux: {
    link: 'https://redux.js.org/',
    title: 'Redux',
    imgPath: '/images/techStack/redux.jpg',
  },
  reduxsaga: {
    link: 'https://redux-saga.js.org/',
    title: 'Redux Saga',
    imgPath: '/images/techStack/reduxsaga.png',
  },
  relay: {
    link: 'https://facebook.github.io/relay/',
    title: 'Relay',
    imgPath: '/images/techStack/relay.jpg',
  },
  sklearn: {
    link: 'https://scikit-learn.org/stable/',
    title: 'Scikit-Learn',
    imgPath: '/images/techStack/sklearn.png',
  },
  spacy: {
    link: 'https://spacy.io',
    title: 'Spacy',
    imgPath: '/images/techStack/spacy.jpg',
  },
  yargs: {
    link: 'http://yargs.js.org',
    title: 'Yargs',
    imgPath: '/images/techStack/yargs.png',
  },
};

const ProjectTechStack = ({ techStack }) =>
  techStack === undefined || techStack === null ? null : (
    <>
      <div className="tech-stack margin-sm-all">
        <Row>
          <div className="col-md-12">
            <div className="text-center">
              <h5 className="project-detail-title"> Tech Stack </h5>
            </div>
          </div>
        </Row>
        <div className="center" style={{ margin: 'auto' }}>
          {techStack.map((tech) => (
            <Col md="2" xs="6" key={tech}>
              <Card className="border-0">
                <a href={techStackMasterList[tech].link}>
                  <img
                    src={techStackMasterList[tech].imgPath}
                    className="img-thumbnail img-fluid tech-stack-img"
                    alt={techStackMasterList[tech].title}
                  />
                </a>
                <a href={techStackMasterList[tech].link} className="text-center tech-stack-link">
                  {techStackMasterList[tech].title}
                </a>
              </Card>
            </Col>
          ))}
        </div>
      </div>
      <style jsx>{`
        .tech-stack {
          margin-top: 20px;
        }
        .tech-stack div {
          padding: 5px;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .tech-stack-link {
          color: var(--primary-blue);
        }
        .tech-stack-img:hover {
          box-shadow: 0 5px 30px rgba(44, 62, 80, 0.1);
        }
      `}</style>
    </>
  );

export default ProjectTechStack;
