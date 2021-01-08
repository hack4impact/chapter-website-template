import React from 'react';

const BlockQuote = ({ text, style }) => (
  <div>
    <p
      className="blockquote-fancy"
      style={{
        ...style,
      }}>
      {text}
    </p>
    <p className="text-right blockquote-fancy-cite">- Bernardo H. Motta, Ph.D.</p>
    <p className="text-right blockquote-fancy-title">
      Faculty Coordinator of the USFSP Neighborhood News Bureau
    </p>
  </div>
);

export default BlockQuote;
