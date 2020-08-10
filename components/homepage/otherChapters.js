import Section from "../section";
import BackgroundSlider from "../backgroundSlider";
import { Row } from "reactstrap";
import Link from "next/link";

const clients = [
  {
    name: "upenn",
    width: 125,
    height: 36,
    logoPath: "/images/chapters/upenn/upenn-logo.jpg",
    link: "https://hack4impact.org",
  },
  {
    name: "gt",
    width: 125,
    height: 55,
    logoPath: "/images/chapters/gt/gt-logo.png",
    link: "https://bitsofgood.org",
  },
  {
    name: "bu",
    width: 75,
    height: 75,
    logoPath: "/images/chapters/bu/bu-logo.png",
    link: "https://www.hack4impactbu.com/index.html",
  },
  {
    name: "calpoly",
    width: 75,
    height: 75,
    logoPath: "/images/chapters/calpoly/calpoly-logo.png",
    link: "https://hack4impact-calpoly.github.io/index.html",
  },
  {
    name: "uchicago",
    width: 75,
    height: 75,
    logoPath: "/images/chapters/uchicago/uchicago-logo.png",
    link: "https://www.facebook.com/h4iuchicago/",
  },
  {
    name: "cornell",
    width: 75,
    height: 75,
    logoPath: "/images/chapters/cornell/cornell-logo.png",
    link: "https://www.facebook.com/h4icornell/",
  },
];
export default function OtherChapters() {
  return (
    <Section className="chapters-section">
      <Row>
        <h1 className="section-title center" style={{ marginBottom: "75px" }}>
          Other Chapters
        </h1>
      </Row>
      <Row>
        <div className="showcase-container">
          <BackgroundSlider iterations={4} duration={50}>
            <div className="client-logo-container">
              {clients.map((client) => (
                <div key={client.name}>
                  <a href={client.link} target="_blank">
                    <img
                      width={client.width}
                      height={client.height}
                      src={client.logoPath}
                    />
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
          .client-logo-container {
            white-space: nowrap;
            overflow: hidden;
          }
          .client-logo-container > div {
            display: inline-block;
            padding: 0 50px;
            vertical-align: middle;
            opacity: 0.25;
            outline: none;
            cursor: default;
            transition: opacity 0.2s ease;
          }
          .client-logo-container > div:hover {
            opacity: 0.8;
          }
        `}</style>
      </Row>
    </Section>
  );
}
