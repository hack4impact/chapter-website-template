import Link from "next/link";

const ToastText = ({ text }) => (
  <>
    <Link href="/apply/students">
      <a>{text}</a>
    </Link>
    <style jsx>{`
      a {
        color: #ffff;
        padding-left: 10px !important;
        font-weight: 400;
      }
      a:hover {
        color: #155da1;
      }
    `}</style>
  </>
);
export default ToastText;
