import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import Home from "./Home";
import ProjectsSection from "./ProjectsSection";

const MainSection = () => (
  <div className="w-full">
    <Home />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <Footer />
  </div>
);

export default MainSection;
