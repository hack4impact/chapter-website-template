import React from 'react';

const getBackground = (grey, darkgrey) => {
  if (grey) {
    return 'rgb(250, 251, 252)';
  }
  if (darkgrey) {
    return '#ebeff2';
  }
  return undefined;
};

const Section = ({ children, grey, darkgrey }) => (
  <section
    className="typical-section"
    style={{
      background: getBackground(grey, darkgrey),
    }}>
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
