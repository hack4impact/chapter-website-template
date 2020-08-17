import React from "react";
import Link from "next/link";

const getAnchor = (link, text, style) => (
  <a className={"link"} style={{ color: "#155da1", ...style }} href={link}>
    {text}
    <style jsx>{`
      .link {
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: normal;
        font-size: 15px;
        margin: auto;
        margin-top: 40px;
        border-bottom: 1px solid #3f46ad;
      }
    `}</style>
  </a>
);

const ActionLink = ({ link, text, style }) =>
  link.startsWith("/") ? (
    <Link href={link}>{getAnchor(link, text, style)}</Link>
  ) : (
    getAnchor(link, text, style)
  );

export default ActionLink;
