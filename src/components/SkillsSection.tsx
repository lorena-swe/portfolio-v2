import "./SkillsSection.css";
import noLogo from "../assets/question.png";

const skillsData = [
  { name: "React", logo: noLogo },
  { name: "Next.js", logo: noLogo },
  { name: "JavaScript", logo: noLogo },
  { name: "TypeScript", logo: noLogo },
  { name: "HTML", logo: noLogo },
  { name: "CSS", logo: noLogo },
  { name: "Python", logo: noLogo },
  { name: "Java", logo: noLogo },
  { name: "Tailwind CSS", logo: noLogo },
  { name: "SQL", logo: noLogo },
  { name: "Git", logo: noLogo },
];

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-section">
        {skillsData.map((skill, index) => (
          <div
            className="skill-card"
            key={skill.name}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-logo">
              <img src={skill.logo} alt={`${skill.name} logo`} />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
