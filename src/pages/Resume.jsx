import React from "react";
import { FaBookmark, FaBookReader } from "react-icons/fa";
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
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItems
            title="Web development"
            date="2022 - Present"
            description="Collaborating with other students in developng web applications at <strong> WicodeZU Zetech University club</strong>"
          />
          <TimelineItems
            title="Web development"
            date="2021 - Present"
            description="Developing various projects based on <strong>MERN Stack</strong> technologies for my personal development on <strong>Github</strong>"
          />
          <TimelineItems
            title="Fullstack web development"
            date="Jan 2024 - April 2024"
            description="Developing <strong>ShopO</strong> project based on <strong>MERN Stack</strong> technologies for my Final Year project<strong> Zetech University</strong>"
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
