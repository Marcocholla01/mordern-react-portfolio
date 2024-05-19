import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch(`projects.json`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filteredData = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filteredData);
    }
  };
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* filter buttons */}
      <ul className="filter-list">
        {["All", "Web design", "Web development", "Applications"].map(
          (category) => (
            <li key={category} className="filter-item">
              <button
                className={category === selectedCategory ? `active` : ``}
                data-filter-btn
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* show data */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt="project-image" loading="lazy" />
                </figure>
                <figcaption className="project-title">
                  {project.title}{" "}
                </figcaption>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
