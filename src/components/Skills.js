import React from 'react';

const Skills = ({ isVisible }) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML"],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: ["Node.js", "MySQL"],
      icon: "⚙️"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Figma"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className={`skills ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-level">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${70 + Math.random() * 30}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;