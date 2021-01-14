import React from 'react';
import Section from '../section';
import { Container, Row } from 'reactstrap';
import ActionLink from '../actionLink';

export default function PartnerSection() {
  return (
    <Section className="partners-section">
      <Container>
        <h2 className="section-title center mb-5">Our Partners</h2>
        <div className="sponsor-row">
          <a href="https://www.imc.com/" alt="IMC">
            <img
              width="150"
              src="/images/imc-logo.jpg"
              className="center partner-logos"
              alt="IMC logo"
            />
          </a>

          <a href="https://stripe.com/" alt="Stripe">
            <img
              width="250"
              src="/images/stripe-logo.svg"
              className="center partner-logos"
              alt="Stripe logo"
            />
          </a>
          <a href="https://www.facebook.com/" alt="Facebook">
            <img
              width="150"
              src="/images/fb-logo.svg"
              className="center partner-logos"
              alt="Facebook logo"
            />
          </a>
        </div>
        <Row>
          <div className="center partner-button">
            <ActionLink
              text="Interested in partnering? Contact us"
              link="mailto:contact@hack4impact.org"
            />
          </div>
        </Row>
      </Container>
      <style jsx>{`
        .partners-section h2 {
          font-size: 20px;
          text-align: center;
          margin-bottom: 50px;
          color: #373f46;
          opacity: 0.7;
          font-weight: 300;
        }
        .partner-button {
          margin-top: 30px !important;
        }
        .partner-logos {
          margin: 0;
          max-width: 15vw;
        }
        .sponsor-row {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </Section>
  );
}
