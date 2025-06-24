import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="section contact-section">
      <h2>Get in Touch</h2>
      <p>
        📧 Email:{" "}
        <a href="mailto:raziatahreen@gmail.com">raziatahreen@gmail.com</a>
      </p>
      <p>
        💻 GitHub:{" "}
        <a
          href="https://github.com/raziatahreen-rt"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/yourusername
        </a>
      </p>
    </div>
  );
};

export default Contact;
