import "./SkillsSection.css";
import noLogo from "../assets/question.png";
import javascript from "../assets/javascript_128.png";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/Next.js.png";
import html from "../assets/html_128.png";
import css from "../assets/css_128.png";
import python from "../assets/python_128.png";
import java from "../assets/java_128.png";
import tailwind from "../assets/tailwind-css-logo.png";
import sql from "../assets/sql-database-logo.png";
import git from "../assets/git_128.png";
import chakra from "../assets/chakraui-logo.png";
import salesforce from "../assets/salesforce_128.png";
import azure from "../assets/azure_logo.png";
import radix from "../assets/radixui-logo.png";
import prisma from "../assets/prisma-logo.png";
import angular from "../assets/angular_logo.png";

const skillsData = [
  { name: "React", logo: react },
  { name: "Next.js", logo: nextjs },
  { name: "JavaScript", logo: javascript },
  { name: "TypeScript", logo: typescript },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "Chakra UI", logo: chakra },
  { name: "Radix UI", logo: radix },
  { name: "Prisma", logo: prisma },
  { name: "Git", logo: git },
  { name: "Python", logo: python },
  { name: "Java", logo: java },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "SQL", logo: sql },
  { name: "Azure", logo: azure },
  { name: "Salesforce", logo: salesforce },
  { name: "Angular", logo: angular },
];

const SkillsSection = () => {
  return (
    <div className="skills-section px-16">
      <h2>My Skills</h2>

      <div className="flex flex-col lg:flex-row">
        <div className="max-w-full lg:max-w-sm xl:max-w-xl about-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse et
          asperiores vitae explicabo laudantium repellat expedita doloribus
          consequatur rerum adipisci nemo iusto, repudiandae tempora suscipit,
          ipsum cumque, quibusdam veniam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odit esse et asperiores vitae explicabo laudantium
          repellat expedita doloribus consequatur rerum adipisci nemo iusto,
          repudiandae tempora suscipit, ipsum cumque, quibusdam veniam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse et
          asperiores vitae explicabo laudantium repellat expedita doloribus
          consequatur rerum adipisci nemo iusto, repudiandae tempora suscipit,
          ipsum cumque, quibusdam veniam.
        </div>

        <div className="flex-1 skills-section lg:pl-16">
          {skillsData.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-logo">
                <img src={skill.logo || noLogo} alt={`${skill.name} logo`} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
