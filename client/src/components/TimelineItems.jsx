import React from "react";

const TimelineItems = ({ title, date, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span dangerouslySetInnerHTML={{ __html: date }}></span>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="timeline-text"
      ></p>
    </li>
  );
};

export default TimelineItems;
