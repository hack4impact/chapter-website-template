import { Card, CardBody } from "reactstrap";
import ActionButton from "../actionButton";
import Link from "next/link";

export default ({ title, imgPath, link, subTitle }) => (
  <>
    <Link href={link}>
      <Card
        className="bg-light mb-3 project-card h-100"
        style={{ height: "100%" }}
      >
        <img className="card-img-top" src={imgPath} alt={title} />
        <CardBody>
          <h5 className="text-title card-title text-center">{title}</h5>
          <p className="text-center" id="card-text">
            {subTitle}
          </p>
          <div className="text-center action-btn-box">
            <ActionButton white text="Read More" link={link} />
          </div>
        </CardBody>
      </Card>
    </Link>
    <style jsx>{`
      .action-btn-box {
        margin-top: 30px;
      }
      .project-card:hover {
        box-shadow: 0 5px 30px rgba(44, 62, 80, 0.1);
      }
      .project-card {
        border: none;
        height: 100% !important;
      }
    `}</style>
  </>
);
