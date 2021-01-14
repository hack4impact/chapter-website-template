import React from 'react';
import Section from '../section';
import BackgroundSlider from '../backgroundSlider';
import { Row } from 'reactstrap';

export default function OtherChapters({ chapterLogos }) {
  return (
    <Section className="chapters-section">
      <h2 className="section-title center mb-5">Other Chapters</h2>
      <Row>
        <div className="showcase-container pt-5">
          <BackgroundSlider>
            <div className="chapter-logo-container">
              {chapterLogos.map(({ name, link, universityLogo }) => (
                <div key={name}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img width={75} height={75} src={universityLogo.url} alt={name} />
                  </a>
                </div>
              ))}
            </div>
          </BackgroundSlider>
        </div>
        <style jsx>{`
          .chapters-section h2 {
            font-size: 20px;
            text-align: center;
            margin-bottom: 50px;
            color: #373f46;
            opacity: 0.7;
            font-weight: 300;
          }
          .showcase-container {
            margin-bottom: 40px;
            overflow: hidden;
            width: 100%;
          }
          .chapter-logo-container {
            white-space: nowrap;
            overflow: hidden;
          }
          .chapter-logo-container > div {
            display: inline-block;
            padding: 0 50px;
            vertical-align: middle;
            opacity: 0.25;
            outline: none;
            cursor: default;
            transition: opacity 0.2s ease;
          }
          .chapter-logo-container > div:hover {
            opacity: 0.8;
          }
        `}</style>
      </Row>
    </Section>
  );
}
