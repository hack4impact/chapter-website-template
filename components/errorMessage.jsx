import React from "react";

const ErrorMessage = ({ code, message }) => (
  <h4 className="page-error">
    {code ? (
      <span style={{ borderRight: "1px solid #EAEAEA", padding: "10px" }}>
        {code}
      </span>
    ) : (
      ""
    )}
    <span style={{ paddingLeft: "10px" }}>{message}</span>
  </h4>
);

export default ErrorMessage;
