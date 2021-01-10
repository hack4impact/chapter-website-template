import React from 'react';
import { Container, Row } from 'reactstrap';
import Directors from './directors';
import Section from '../section';
import TeamData from '../../data/teamData';
import MemberIcon from '../memberIcon';

const TeamSection = ({ members, alumni }) => (
  <Section>
    <Container>
      <Directors directors={TeamData.directors} />
      <Row>
        {members.map((member) => (
          <MemberIcon
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            linkedIn={member.linkedIn}
          />
        ))}
      </Row>
      <h2 className="p-5 m-3 center"> Alumni </h2>
      <Row>
        {alumni.map((member) => (
          <MemberIcon
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            linkedIn={member.linkedIn}
          />
        ))}
      </Row>
    </Container>
  </Section>
);

export default TeamSection;
