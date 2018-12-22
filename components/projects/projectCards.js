import { Card, CardBody } from "reactstrap";
import ActionButton from "../actionButton";

export default ({ title, imgPath, link, subTitle }) => (
  <Card className="bg-light mb-3">
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
    <style jsx>{`
      .action-btn-box {
        margin-top: 30px;
      }
    `}</style>
  </Card>
);
