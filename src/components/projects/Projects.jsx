import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Projects = () => {
  const projectData = [
    { id: "Catalogue", name: "📝Catalogue Project " },
    { id: "travel", name: "🌍 Travel Website" },
    { id: "portfolio", name: "💼 Portfolio Site" },
  ];

  return (
    <div className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-cards">
        {projectData.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="card">
            <div className="card-title">{project.name}</div>
            <div className="card-arrow">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
