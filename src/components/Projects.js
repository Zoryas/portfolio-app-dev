import React, { useState } from 'react';

const Projects = ({ isVisible }) => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Ecommerce React",
      description: "A full-stack e-commerce platform built with React, featuring product catalog, shopping cart, and user authentication. Integrated with REST API for seamless data management.",
      technologies: ["React", "JavaScript", "CSS", "REST API"],
      image: "🛒",
      demoLink: "https://github.com/Zoryas/Ecommerce-React",
      codeLink: "https://github.com/Zoryas/Ecommerce-React"
    },
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my projects and skills. Built with pure HTML, CSS, and JavaScript with smooth animations and modern design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "💼",
      demoLink: "https://portfolio-gomba.netlify.app/",
      codeLink: "https://github.com/Zoryas/portfolio" 
    },
    {
      title: "Food Fiesta Restaurant",
      description: "A restaurant website featuring menu display, online ordering system, and contact information. Focused on user experience and responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: "🍕",
      demoLink: "https://foodfiesta-webtech-gomba.netlify.app/",
      codeLink: "https://github.com/Zoryas/FoodFiesta" 
    },
  ];

  return (
    <section id="projects" className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Showcasing my journey in web development</p>
        
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-card ${activeProject === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.demoLink} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </a>
                  </div>
                </div>
                <div className="project-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;