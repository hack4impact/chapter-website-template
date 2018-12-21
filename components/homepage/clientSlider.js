import BackgroundSlider from "../backgroundSlider";
import { Row } from "reactstrap";
import Link from "next/link";

const clients = [
  {
    name: "lwb",
    width: 250,
    height: 55,
    logoPath: "/static/lwblogo.svg",
    link: "/projects/lwb"
  },
  {
    name: "child's play",
    width: 140,
    height: 135,
    logoPath: "/static/cplogogreen.png",
    link: "/projects/cp"
  },
  {
    name: "philidelphia reads",
    width: 140,
    height: 120,
    logoPath: "/static/philareadslogo.png",
    link: "/projects/philareads"
  },
  {
    name: "C2TC",
    width: 130,
    height: 130,
    logoPath: "/static/c2tclogo.png",
    link: "/projects/c2tc"
  },
  {
    name: "Global Giving",
    width: 250,
    height: 40,
    logoPath: "/static/gglogo.png",
    link: "/projects/gg"
  },
  {
    name: "Kiva",
    width: 160,
    height: 55,
    logoPath: "/static/kivalogo.png",
    link: "/projects/kiva"
  },
  {
    name: "NNB",
    width: 250,
    height: 50,
    logoPath: "/static/nnblogo.png",
    link: "/projects/nnb"
  }
];
export default () => (
  <Row>
    <div className="showcase-container">
      <BackgroundSlider duration={40}>
        <div className="client-logo-container">
          {clients.map(client => (
            <div>
              <Link href={client.link}>
                <a>
                  <img
                    width={client.width}
                    height={client.height}
                    src={client.logoPath}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </BackgroundSlider>
    </div>
    <style jsx>{`
      .showcase-container {
        margin-bottom: 40px;
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
);
