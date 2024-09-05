import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the projects data from the project.json file
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === parseInt(id));
        setProject(foundProject);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!project) return <p>Project not found</p>;


  return (
    <div className="project-details">
      <div className="project-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      <div className="project-image">
        <img src={project.imageUrl} alt={`${project.title} project`} />
      </div>

      <div className="project-info">
        <h3>Tech Stack</h3>
        <ul className="tech-list">
          {project.techStack.map((tech, index) => (
            <li key={index} className="tech-item">{tech}</li>
          ))}
        </ul>

        <p className={`status ${project.status === "Completed" ? "completed" : "in-progress"}`}>
          Status: {project.status}
        </p>

        <div className="project-links">
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
