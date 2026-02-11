import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>IPO Web Application</h3>
        <p>Full stack app using React & Spring Boot</p>
        <a href="#">View Project</a>
      </div>

      <div className="project-card">
        <h3>Finance Tracker</h3>
        <p>Expense tracking app using MERN stack</p>
        <a href="#">View Project</a>
      </div>
    </section>
  );
}

export default Projects;
