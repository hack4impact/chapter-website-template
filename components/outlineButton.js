import React from "react";
import Link from "next/link";

const OutlineButton = ({ text, link, style }) => (
  <button style={{ style }}>
    <Link href={link}>
      <a>{text}</a>
    </Link>
    <style jsx>{`
      button {
        padding: 0px 2rem;
        border-radius: 4px;
        border-image: initial;
        overflow: hidden;
        transition: all 0.15s ease 0s;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        height: 2.5rem;
        color: white;
        border-color: #155da1;
      }

      button a {
        font-family: "Chivo", sans-serif;
        font-weight: 100;
        font-size: 14px;
        color: white !important;
        text-decoration: none;
      }

      button:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 3px 5px 20px;
        transition: border 0.2s, background 0.2s, color 0.2s ease-out;
      }
    `}</style>
  </button>
);

export default OutlineButton;
