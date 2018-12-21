import Link from "next/link";

const WhiteButton = ({ link, text, style }) => (
  <button style={style}>
    <Link href={link}>
      <a>{text}</a>
    </Link>
    <style jsx>{`
      button {
        height: 2.5rem;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

        color: white;
        margin: 0px;
        padding: 0px 2rem;
        border-radius: 5px;
        background: white;
        border-image: initial;
        overflow: hidden;
        transition: all 0.15s ease 0s;
        border: none;
      }

      button a {
        font-family: "Chivo", sans-serif;
        font-weight: 100;
        font-size: 14px;
        color: black !important;
        text-decoration: none;
      }

      button:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 3px 5px 20px;
        transition: border 0.2s, background 0.2s, color 0.2s ease-out;
      }
    `}</style>
  </button>
);

export default WhiteButton;
