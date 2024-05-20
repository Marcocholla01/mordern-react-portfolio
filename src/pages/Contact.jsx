import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.509625105501!2d36.97035474518153!3d-1.1467289258907958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47c1de415d57%3A0x7e91cfde402a0401!2sRUIRU%20MERCY%20EDUCATION%20CENTRE!5e0!3m2!1sen!2snl!4v1716169751221!5m2!1sen!2snl"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <from className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter Your Names"
              className="form-input"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email address"
              className="form-input"
            />
          </div>
          <textarea
            name="message"
            id=""
            className="form-input"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="form-btn">
            <span>Send Message</span>
          </button>
        </from>
      </section>
    </section>
  );
};

export default Contact;
