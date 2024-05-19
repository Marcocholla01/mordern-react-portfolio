import React from "react";
import {
  GiCalendar,
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          {/* <img src="images/mamun.jpg" alt="profile-image" width="80" /> */}

          <img
            src="https://marcocholla001.onrender.com/static/media/me2.24fe524e008531584475.png"
            alt="profile-image"
            width="100"
          />
        </figure>
        <div className="info-content">
          <h1 className="name">Paul O. Ocholla</h1>
          <p className="title">Junior Front-End Engineer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>
      {/* contact info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                className="contact-link"
                href="mailto:marcochollapaul01@gmail.com"
              >
                marcochollapaul01@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a className="contact-link" href="tel:+254742275513">
                +254-742-275-513
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2000-11-15">
                15<sup>th</sup> Nov 2000
              </time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Nairobi, Kenya</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
