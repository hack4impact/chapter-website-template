import React from "react"; //required for some reason...
import { Container } from "reactstrap";
import Section from "../section";
import Contract from "../../static/icons/contract.svg";
import Interview from "../../static/icons/interview.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

const Timeline = ({ processes }) => (
  <>
    <VerticalTimeline>
      {processes !== undefined &&
        processes.map(process => (
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            date={process.date}
            iconStyle={{ background: "#155DA1", color: "#fff" }}
            icon={process.icon}
          >
            <h3 className="vertical-timeline-element-title">{process.title}</h3>
            <p>{process.detail}</p>
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  </>
);

export default Timeline;
