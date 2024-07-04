import SkillsSection from "./SkillsSection";
// import amazonLogo from "../assets/amazon_logo.jpg";
import "./AboutSection.css";
import SectionTitle from "./SectionTitle";

const AboutSection = () => (
  <div
    id="about"
    className="section h-screen w-full px-24 flex justify-center items-center"
  >
    <div className="flex flex-col justify-center">
      <SectionTitle sectionNumber={"01"} name="About Me" />
      <SkillsSection />
    </div>
  </div>
);

export default AboutSection;
