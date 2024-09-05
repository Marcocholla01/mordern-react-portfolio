import React, { useEffect, useState } from "react";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Clients from "../components/Clients";
import DownloadResume from "../components/DownloadResume";

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
      title: "Photography",
      icon: "/images/icon-photo.svg",
      description:
        "I make high-quality photos of any category at a professional level.",
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
          Hello, I'm Paul, a dedicated BSCIT student at Zetech University, where
          I am passionately immersing myself in the world of technology. As a
          Junior MERN stack developer, I channel my enthusiasm into creating
          dynamic and efficient web applications. My journey in the realm of IT
          is driven by an insatiable curiosity and a commitment to continuous
          learning.
        </p>
        <p>
          In the ever-evolving landscape of technology, I find joy in the
          challenges of being a MERN stack developer—navigating MongoDB,
          Express.js, React, and Node.js to craft seamless user experiences.
          Beyond the code, I bring a personalized touch to my work, infusing
          projects with precision and creativity. Join me as I embark on this
          exciting journey, where each line of code contributes to the narrative
          of my growth as a developer. Let's build tomorrow's digital landscapes
          together!
        </p>
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
