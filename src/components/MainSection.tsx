import React from "react";

const AboutSection = () => (
  <div id="about" className="section h-screen w-full">
    <h2>About</h2>
    <p>About section content...</p>
  </div>
);

const ProjectsSection = () => (
  <div id="projects" className="section h-screen">
    <h2>Projects</h2>
    <p>Projects section content...</p>
  </div>
);

const ExperienceSection = () => (
  <div id="experience" className="section h-screen">
    <h2>Experience</h2>
    <p>Experience section content...</p>
  </div>
);

const MainSection = () => (
  <div className="w-screen">
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
  </div>
);

export default MainSection;
