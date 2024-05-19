import React from "react";
import { FaBookReader } from "react-icons/fa";
import TimelineItems from "../components/TimelineItems";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItems
            title="Zetech University"
            date="2020 - Present"
            description="Bachelor of Science in Information Technology"
          />
          <TimelineItems
            title="Nyandiwa sec. school"
            date="2016 - 2019"
            description="From Form 1 - Form 4, did my K.C.S.E on 2019, <br> Was a club member of Scouts and scout club, patrol leader between Feb, 2018 and Oct, 2019 and Perticipated in various scouts competitions.<br> Was also a member of Science club from Jan, 2017 until i did my K.C.S.E on November 2019 , perticipated actively on the club and presented the school on Kenya science and Engineering fair on 2018 and 2019"
          />
          <TimelineItems
            title="Nyandiwa primary school"
            date="2013 - 2015"
            description="From std 6 - std 7, did my K.C.P.E on 2015"
          />
          <TimelineItems
            title="St. Domnic's primary school"
            date="2009 - 2012"
            description="From std 3 - std 5"
          />
          <TimelineItems
            title="Victory Academy Center"
            date="2005 - 2008"
            description="From pre-school - std 2"
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
