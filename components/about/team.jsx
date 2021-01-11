import React from 'react';
import { Container, Row } from 'reactstrap';
import DirectorQuotes from './DirectorQuotes';
import Section from '../section';
import MemberIcon from '../memberIcon';

function Team({ directorQuotes, members, alumni }) {
  return (
    <Section>
      <Container>
        <DirectorQuotes content={directorQuotes} />
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
}

export default Team;
