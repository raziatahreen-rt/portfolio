import React from "react";
import { useParams, Link } from "react-router-dom";
import "./projectDetail.css"; // 

const ProjectDetail = () => {
  const { id } = useParams();

  const details = {
    Catalogue: {
      title: "📝 Catalogue Project",
      description:
        "Build a website with two pages: View Items and Add Item. Add Item includes a form for item name, type, description, and images. Newly added items show up dynamically on the View Items page.",
      link: "https://react-project-liart-ten.vercel.app/",
    },
    travel: {
      title: "🌍 Travel Website",
      description:
        "A multi-page travel site built with React Router and styled for responsiveness. Includes destination search and booking simulation.",
      link: "git@github.com:raziatahreen-rt/Travel-Tourism.git",
    },
    portfolio: {
      title: "💼 Portfolio Site",
      description:
        "A professional single-page React portfolio featuring routing, component-based design, and clean UI.",
      link: "",
    },
  };

  const project = details[id];

  if (!project) return <div className="section">Project not found.</div>;

  return (
    <div className="section detail-page">
      <h2>{project.title}</h2>
      <p className="detail-text">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-link"
        >
          🔗 Visit Project
        </a>
      )}

      <br />
      <Link to="/" className="back-btn">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
