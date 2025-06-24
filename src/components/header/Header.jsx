import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="section header">
      <h1>
        Hello, I'm <span className="highlight">Razia Tahreen</span>
      </h1>
      <h2>Full Stack Developer</h2>
      <p className="abc">
        I craft responsive and interactive web interfaces using React.js,
        ensuring smooth user experiences across all devices. Currently, I’m
        exploring the exciting world of Node.js and full-stack development,
        building complete web applications from front to back.
        <br /> <br /> <hr /> <br />
        <div className="classA">
          <strong>
           
            🚀 Tech Stack: <br />
          </strong>
          Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS{" "}
          <br />
          Backend : Node.js, Express.js <br />
          Tools & Platforms: Git, GitHub, Vite, VS Code, Vercel
        </div>
      </p>
    </div>
  );
};

export default Header;
