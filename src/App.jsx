import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import ProjectDetail from "./pages/projectDetails/ProjectDetail";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
