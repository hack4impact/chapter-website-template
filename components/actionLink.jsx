import React from 'react';
import Link from 'next/link';

const getAnchor = (link, text, style) => (
  <a className={'link'} style={{ color: 'var(--primary-blue)', ...style }} href={link}>
    {text}
    <style jsx>{`
      .link {
        font-weight: normal;
        line-height: 1.2;
        letter-spacing: normal;
        font-size: 15px;
        margin: auto;
        margin-top: 40px;
        border-bottom: 1px solid var(--primary-blue);
      }
    `}</style>
  </a>
);

const ActionLink = ({ link, text, style }) =>
  link.startsWith('/') ? (
    <Link href={link}>{getAnchor(link, text, style)}</Link>
  ) : (
    getAnchor(link, text, style)
  );

export default ActionLink;
