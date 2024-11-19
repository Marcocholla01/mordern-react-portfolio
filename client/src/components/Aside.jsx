import React from "react";
import {
  GiCalendar,
  GiClawSlashes,
  GiDoorWatcher,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";
import me from "../assets/me2.png";
import { useErrorToast, useSuccessToast } from "../hooks/useToast";

const Aside = () => {
  const showSuccessToast = useSuccessToast();
  const showErrorToast = useErrorToast();

  const handleSuccess = () => {
    showSuccessToast("Operation was successful!");
  };

  const handleError = () => {
    showErrorToast("Something went wrong!");
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          {/* <img src="images/mamun.jpg" alt="profile-image" width="80" /> */}

          <img src={me} alt="profile-image" width="100" />
        </figure>
        <div className="info-content">
          <h1 className="name">Paul O. Ocholla</h1>
          <p className="title">Full stack & Wordpress Developer</p>
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

      {/* <div>
        <button onClick={handleSuccess}>Show Success Toast</button>
        <button onClick={handleError}>Show Error Toast</button>
      </div> */}
    </aside>
  );
};

export default Aside;
