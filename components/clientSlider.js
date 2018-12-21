import BackgroundSlider from "./backgroundSlider";
import { Row } from "reactstrap";

export default () => (
  <Row>
    <div className="showcase-container">
      <BackgroundSlider duration={40}>
        <div className="client-logo-container">
          <div>
            <img width="250" height="55" src="/static/lwblogo.svg" />
          </div>
          <div>
            <img width="140" height="120" src="/static/cplogogreen.png" />
          </div>
          <div>
            <img width="140" height="120" src="/static/philareadslogo.png" />
          </div>
          <div>
            <img width="130" height="130" src="/static/c2tclogo.png" />
          </div>
          <div>
            <img width="250" height="40" src="/static/gglogo.png" />
          </div>
          <div>
            <img width="160" height="55" src="/static/kivalogo.png" />
          </div>
          <div>
            <img width="250" height="50" src="/static/nnblogo.png" />
          </div>
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
