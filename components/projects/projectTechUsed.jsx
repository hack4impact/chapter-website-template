import React from 'react';
import { Row, Card, Col, Container } from 'reactstrap';
import Section from '../section';

// need to add to this whenever a new library/technology is used
// this must match the strings listed in props.techStack, which is an array
const icons = {
  AWS: {
    link: 'https://aws.amazon.com',
    title: 'AWS',
    imgPath: '/images/techStack/aws.png',
  },
  'Beautiful Soup': {
    link: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
    title: 'Beautiful Soup',
    imgPath: '/images/techStack/beautiful soup.jpg',
  },
  Box: {
    link: 'https://box.com',
    title: 'Box',
    imgPath: '/images/techStack/box.jpg',
  },
  DraftJS: {
    link: 'https://draftjs.org',
    title: 'DraftJS',
    imgPath: '/images/techStack/draftjs.png',
  },
  DynamoDB: {
    link: 'https://aws.amazon.com/dynamodb/',
    title: 'DynamoDB',
    imgPath: '/images/techStack/dynamodb.png',
  },
  Express: {
    link: 'https://expressjs.com',
    title: 'ExpressJS',
    imgPath: '/images/techStack/express.png',
  },
  Firebase: {
    link: 'https://firebase.google.com',
    title: 'Firebase',
    imgPath: '/images/techStack/firebase.png',
  },
  Flask: {
    link: 'http://flask.pocoo.org/',
    title: 'Flask',
    imgPath: '/images/techStack/flask.jpg',
  },
  Gensim: {
    link: 'https://radimrehurek.com/gensim/',
    title: 'Gensim',
    imgPath: '/images/techStack/gensim.png',
  },
  GraphQL: {
    link: 'https://graphql.org/',
    title: 'GraphQL',
    imgPath: '/images/techStack/graphql.jpg',
  },
  Mapbox: {
    link: 'https://www.mapbox.com',
    title: 'Mapbox',
    imgPath: '/images/techStack/mapbox.png',
  },
  MongoDB: {
    link: 'https://www.mongodb.com/',
    title: 'MongoDB',
    imgPath: '/images/techStack/mongodb.jpg',
  },
  Next: {
    link: 'https://nextjs.org',
    title: 'NextJS',
    imgPath: '/images/techStack/next.png',
  },
  nltk: {
    link: 'https://www.nltk.org',
    title: 'NLTK',
    imgPath: '/images/techStack/python.jpg',
  },
  NodeJS: {
    link: 'https://nodejs.org/en/',
    title: 'NodeJS',
    imgPath: '/images/techStack/nodejs.jpg',
  },
  Passport: {
    link: 'http://www.passportjs.org/',
    title: 'PassportJS',
    imgPath: '/images/techStack/passportjs.png',
  },
  Postgres: {
    link: 'https://www.postgresql.org/',
    title: 'Postgres',
    imgPath: '/images/techStack/postgres.jpg',
  },
  Python: {
    link: 'https://www.python.org/',
    title: 'Python',
    imgPath: '/images/techStack/python.jpg',
  },
  Ramda: {
    link: 'https://ramdajs.com/',
    title: 'RamdaJS',
    imgPath: '/images/techStack/ramdajs.png',
  },
  React: {
    link: 'https://reactjs.org/',
    title: 'React',
    imgPath: '/images/techStack/react.jpg',
  },
  'React Native': {
    link: 'https://facebook.github.io/react-native/',
    title: 'React Native',
    imgPath: '/images/techStack/react.jpg',
  },
  Redis: {
    link: 'https://redis.io/',
    title: 'Redis',
    imgPath: '/images/techStack/redis.jpg',
  },
  Redux: {
    link: 'https://redux.js.org/',
    title: 'Redux',
    imgPath: '/images/techStack/redux.jpg',
  },
  'Redux Sagas': {
    link: 'https://redux-saga.js.org/',
    title: 'Redux Saga',
    imgPath: '/images/techStack/reduxsaga.png',
  },
  Relay: {
    link: 'https://facebook.github.io/relay/',
    title: 'Relay',
    imgPath: '/images/techStack/relay.jpg',
  },
  Sklearn: {
    link: 'https://scikit-learn.org/stable/',
    title: 'Scikit-Learn',
    imgPath: '/images/techStack/sklearn.png',
  },
  Spacy: {
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

function ProjectTechUsed({ technologiesUsed }) {
  return technologiesUsed?.length ? (
    <Section>
      <Container>
        <h2 className="project-detail-title text-center mb-5"> Tech Stack </h2>
        <Row className="d-flex justify-content-center">
          {technologiesUsed.map((tech) => (
            <Col md="2" xs="6" key={tech}>
              <Card className="border-0">
                <a href={icons[tech].link}>
                  <img
                    src={icons[tech].imgPath}
                    className="img-thumbnail img-fluid tech-stack-img"
                    alt={icons[tech].title}
                  />
                </a>
                <a href={icons[tech].link} className="text-center tech-stack-link">
                  {icons[tech].title}
                </a>
              </Card>
            </Col>
          ))}
        </Row>
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
      </Container>
    </Section>
  ) : null;
}

export default ProjectTechUsed;
