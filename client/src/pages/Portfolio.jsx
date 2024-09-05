import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Add state for selected project

  const categories = ["All", "Web design", "Web development", "Applications"];

  useEffect(() => {
    fetch(`/projects.json`)
      .then((res) => res.json())
      .then((data) => {
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

  const handleOpenModal = (project) => {
    setSelectedProject(project); // Set the selected project
    setIsOpen(true); // Open modal
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* filter buttons */}
      <ul className="filter-list">
        {categories.map((category) => (
          <li key={category} className="filter-item">
            <button
              className={category === selectedCategory ? `active` : ``}
              data-filter-btn
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
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
              <Link to={`#`}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye onClick={() => handleOpenModal(project)} />
                  </div>
                  <img src={project.image} alt="project-image" loading="lazy" />
                </figure>
                <figcaption className="project-title">
                  {project.title}{" "}
                </figcaption>
                <p className="project-category">{project.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {isOpen && selectedProject && (
        <Modal
          setIsOpen={setIsOpen}
          demoLink={selectedProject.demoLink}
          sourCode={selectedProject.sourCode}
        />
      )}
    </section>
  );
};

export default Portfolio;
