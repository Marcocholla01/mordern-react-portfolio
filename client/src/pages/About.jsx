import React, { useEffect, useState } from "react";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Clients from "../components/Clients";
import DownloadResume from "../components/DownloadResume";
import Techstack from "../components/Techstack";

const About = () => {
  const servicesData = [
    {
      title: "Web design",
      icon: "/images/icon-design.svg",
      description:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      title: "Web development",
      icon: "/images/icon-dev.svg",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      title: "Mobile apps",
      icon: "/images/icon-app.svg",
      description:
        "Professional development of applications for iOS and Android.",
    },
    {
      title: "WordPress Development",
      icon: "/images/icon-wordpress.svg",
      description:
        "Creating custom themes, plugins, and scalable websites tailored to your business needs.",
    },
  ];

  const [testimonials, setTestimonials] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`testimonials.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTestimonials(data);
      });
  }, []);

  useEffect(() => {
    fetch(`clients.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClients(data);
      });
  }, []);
  return (
    <section className="about active">
      <header>
        <h2 className="h2 article-title">About</h2>{" "}
      </header>
      <DownloadResume />
      <section className="about-text">
        <p>
          Hello, I'm Paul — a passionate web and WordPress developer with a
          solid BSc in Information Technology from Zetech University. With
          hands-on experience in creating dynamic, user-friendly web
          applications and customizing WordPress themes and plugins, I bring
          expertise in HTML, CSS, JavaScript, Python, Golang, Nodejs, React,
          Vue.js, Expressjs, TailwindCSS, WordPress development, and PHP.
        </p>

        <p>
          As a web developer, I’ve navigated the intricacies of SEO strategies,
          Google Analytics, and email marketing tools to drive audience
          engagement and content promotion across digital platforms. I also have
          experience in database management, including MySQL, PostgreSQL,
          MongoDB, and Firebase, ensuring seamless data handling and
          integration.
        </p>

        <p>
          With a keen eye for detail and a commitment to creating
          precision-engineered code, I approach every project with creativity
          and a user-centered mindset. Whether it's building custom WordPress
          plugins, crafting responsive web designs, or optimizing user
          experiences, my goal is to deliver high-quality digital solutions that
          meet client needs and exceed expectations. <br /> <br /> Let's connect
          and collaborate on building impactful web projects that bring ideas to
          life!
        </p>
      </section>
      <section className="service">
        <Techstack />
      </section>
      {/* services */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Testimonial section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>
      {/* clients logo */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <Clients key={index} logo={client.logo} link={client.link} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default About;
