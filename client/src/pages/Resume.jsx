import React from "react";
import { FaBookmark, FaBookReader } from "react-icons/fa";
import TimelineItems from "../components/TimelineItems";
import SkillsItems from "../components/SkillsItems";
import DownloadResume from "../components/DownloadResume";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <DownloadResume />
      {/* Edication */}
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
      {/* Experince */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItems
            title="Wordpress & Full stack Developer"
            date="2022 - Present"
            description="Collaborating with other students in developing web applications at <strong> WicodeZU Zetech University club</strong>"
          />
          <TimelineItems
            title="Wordpress & Backend developer"
            date="Aug, 2024 - Oct, 2024 (Attachee)"
            description="Become a Theme Designer, Plugin & Python (Flask) backend Developer at  <strong>Context Expert Agencies in Ruiru</strong>"
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

      {/* Skills Section */}
      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skill-list content-card">
          <SkillsItems title="Web Design" value={60} />
          <SkillsItems title="Wordpress Development" value={72} />
          <SkillsItems title="React" value={80} />
          <SkillsItems title="Mongo DB" value={70} />
          <SkillsItems title="Front-end Development" value={80} />
          <SkillsItems title="Back-end Development" value={93} />
          <SkillsItems title="IT Support" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
