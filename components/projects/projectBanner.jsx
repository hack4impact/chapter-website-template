import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ActionButton from '../actionButton';
import ContentBlock from '../../components/ContentBlock';

export default function ProjectBanner({ title = '', description, codeRepoLink, finalProductLink }) {
  return (
    <>
      <section className="project-page-banner">
        <Container className="margin-sm-all">
          <Row>
            <Col md="12">
              <h1 className="project-title mb-4">{title}</h1>
            </Col>
          </Row>

          <Row>
            <ContentBlock className="col-md-8 offset-md-2" content={description.json} />
          </Row>

          <Row className="text-center">
            <Col md="12">
              {finalProductLink && (
                <ActionButton
                  text="Final Product"
                  link={finalProductLink}
                  white
                  style={{ marginRight: '10px' }}
                />
              )}
              {codeRepoLink && <ActionButton text="View Code" link={codeRepoLink} white />}
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        .project-page-banner {
          padding: 7% 0;
          background: radial-gradient(white, #64ab8a);
          background-size: cover;
          background-attachment: fixed;
          font-family: var(--accent-font);
          text-align: center;

          font-size: 18px !important;
          font-weight: 500;
        }
        .section-title-link {
          color: black;
        }
        .section-title-link:hover {
          color: #155da1;
        }
        .project-title {
          font-size: 40px;
          font-weight: 600;
        }
        .previous-button {
          margin: 1vh;
          margin-bottom: 0vh;
        }
      `}</style>
    </>
  );
}
