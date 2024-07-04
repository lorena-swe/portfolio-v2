import "./SkillsSection.css";
import MyCodeComponent from "./MyCodeComponent";

const SkillsSection = () => {
  return (
    <div className="skills-section pt-12">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="max-w-full lg:max-w-sm xl:max-w-xl about-intro">
          Hello there!
          <br />
          <br />
          I'm a passionate <span>frontend engineer</span> with 2 years of
          experience, dedicated to crafting modular, scalable, and beautiful
          user experiences. While my primary focus is on frontend development, I
          also have a strong grasp of full-stack technologies.
          <br />
          <br />
          As a developer, I thrive on creating dynamic and responsive web
          applications using <span>React</span> and <span>Next.js</span>
          . My expertise also extends to various modern web development
          technologies, and I continuously challenge myself through diverse
          projects.
          <br />
          <br />I love to be part of a forward-thinking team where I can
          contribute to <span>innovative projects</span> and continue to{" "}
          <span>grow as a developer</span>. I am enthusiastic about continuous
          learning and always eager to take on{" "}
          <span>new challenges that push my boundaries</span>.
          <br />
          Let's connect and create something amazing together!
        </div>

        <div className="flex-1 w-full skills-section lg:pl-12">
          <MyCodeComponent />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
