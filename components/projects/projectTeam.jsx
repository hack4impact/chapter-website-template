import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ActionButton from '../actionButton';
import TeamMemberIcon from '../memberIcon';

const ProjectTeam = ({ team }) => (
  <section className="project-team">
    <Container>
      <Row>
        <Col md="12">
          <h5 className="project-detail-title center mb-5"> Project Team </h5>
        </Col>
      </Row>

      <Row>
        {team.type === 'no-pic' ? (
          <div>
            <Row>
              <Col md="3" />
              {/* eslint-disable jsx-a11y/aria-role */}
              <TeamMemberIcon nopic name={team.detail.pm} role="Product Manager" />
              <TeamMemberIcon nopic name={team.detail.tl} role="Tech Lead" />
              {/* eslint-enable jsx-a11y/aria-role */}
            </Row>
            <Row>
              <Col md="12">
                <div className="text-center">
                  <p className="text-center">
                    <b> Developers: </b> <>{team.detail.swe.join(', ')}</>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          team.detail.map((member) => (
            <TeamMemberIcon name={member.name} role={member.role} key={member.name} />
          ))
        )}
      </Row>
      <Row>
        <div style={{ margin: '30px auto' }}>
          <ActionButton style={{ margin: '30px auto' }} white link="/projects">
            View Other Projects
          </ActionButton>
        </div>
      </Row>
    </Container>
  </section>
);

export default ProjectTeam;
