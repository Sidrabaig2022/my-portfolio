import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects") // Fetch projects from backend
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="glow-text">💎 My Gorgeous Creations 💎</h2>
      <p className="projects-text">
        Every project is crafted with <strong>passion, innovation, and a touch of magic.</strong> ✨  
        Explore some of my stunning works! 💖
      </p>

      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-box"
              whileHover={{ scale: 1.05 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.image && <img src={project.image} alt={project.title} />}
            </motion.div>
          ))
        ) : (
          <p className="no-projects">No projects found! Try adding some in MongoDB Compass. 💕</p>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
