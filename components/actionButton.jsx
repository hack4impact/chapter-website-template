import React from 'react';
import Link from 'next/link';

function Anchor({ link, white, className, children, ...props }) {
  return (
    <>
      <a
        {...props}
        href={link}
        className={`${className ?? ''} ${white ? 'white-button' : 'action-button'}`}>
        {children}
      </a>
      <style jsx>{`
        a {
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          border-radius: 5px;
          padding: 0.7rem 2rem;
          border: none;
          color: white;
          text-decoration: none;
          transition: box-shadow 0.2s;
          text-align: center;
        }
        .white-button {
          background: white;
          color: var(--black);
        }
        .action-button {
          background: var(--primary-blue);
          font-weight: bold;
          color: white;
        }

        a:hover {
          box-shadow: rgba(0, 0, 0, 0.12) 3px 5px 20px;
          transition: border 0.2s, background 0.2s, color 0.2s ease-out;
        }
      `}</style>
    </>
  );
}

const ActionButton = (props) => {
  return props?.link.startsWith('/') ? (
    <Link href={props?.link}>
      <Anchor {...props} />
    </Link>
  ) : (
    <Anchor {...props} target="_blank" rel="noreferrer" />
  );
};

export default ActionButton;
