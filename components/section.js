import React from "react";
import { Container, Row } from "reactstrap";

const Section = ({ children, grey, darkgrey }) => (
  <section
    className="typical-section"
    style={{
      background: grey ? "rgb(250, 251, 252)" : darkgrey ? "#ebeff2" : undefined
    }}
  >
    <div>
      {children}
      <style jsx>
        {`
          @media (max-width: 768px) {
            section {
              padding: 300px 0;
              height: 600px;
            }
          }
          .typical-section {
            padding: 100px 0;
            margin: auto;
          }
        `}
      </style>
    </div>
  </section>
);

export default Section;
// rgb(250, 251, 252) !important
