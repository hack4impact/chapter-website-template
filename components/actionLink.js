import Link from "next/link";

export default ({ link, text, style }) => (
  <Link href={link}>
    <a className="link" style={{ color: "#155da1", ...style }}>
      {text}
      <style jsx>{`
        .link {
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: normal;
          font-size: 15px;
          margin: auto;
          border-bottom: 1px solid #3f46ad;
          margin-top: 40px;
        }
      `}</style>
    </a>
  </Link>
);
