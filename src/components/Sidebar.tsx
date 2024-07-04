import { useState } from "react";
import { FaAddressCard, FaBars, FaBriefcase, FaCode } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/react.svg";
import SectionButton from "./SectionButton";
import "./Sidebar.css";
import IconGitHub from "./icons/IconGitHub";
import IconGmail from "./icons/IconGmail";
import IconLinkedin from "./icons/IconLinkedin";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleHomeRedirect = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionName: string) => {
    setCurrentSection(sectionName);
  };

  const handleMobileSectionClick = (sectionName: string) => {
    handleSectionClick(sectionName);

    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { name: "about", icon: FaAddressCard, label: "About" },
    { name: "projects", icon: FaCode, label: "Projects" },
    { name: "experience", icon: FaBriefcase, label: "Experience" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen py-5 px-8">
        <div className="hidden md:flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-center h-16">
            <a
              className="text-center cursor-pointer"
              onClick={handleHomeRedirect}
            >
              <img alt="Logo" src={logo} />
            </a>
          </div>

          {/* Section Buttons */}
          <div className="flex-1 flex items-center justify-center">
            <div className="nav-section flex-1 flex flex-col items-center">
              {sections.map((section) => (
                <SectionButton
                  key={section.name}
                  sectionName={section.name}
                  icon={section.icon}
                  label={section.label}
                  isActive={currentSection === section.name}
                  onClick={handleSectionClick}
                />
              ))}
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://github.com/lorena-swe"
              target="_blank"
              className="icon-link"
            >
              <IconGitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/lorena-zotaj/"
              target="_blank"
              className="icon-link"
            >
              <IconLinkedin />
            </a>
            <a href="mailto:lorenazotaj10@gmail.com" className="icon-link">
              <IconGmail />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sibar Panel */}
      <button
        className="hamburger-menu md:hidden"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaXmark fontSize="30px" /> : <FaBars />}
      </button>
      {isMobileMenuOpen && (
        <div
          className={`sidebar fixed inset-0 z-50 flex justify-end ${
            isMobileMenuOpen ? "open" : "closed"
          }`}
        >
          <div className="mobile-sidebar h-full w-full max-w-xs">
            <div className="flex md:hidden flex-col h-full w-full">
              {/* Section Buttons */}
              <div className="flex-1 flex flex-col pt-24">
                <button
                  className="section-button-mobile"
                  onClick={() => handleMobileSectionClick("about")}
                >
                  About
                </button>
                <button
                  className="section-button-mobile"
                  onClick={() => handleMobileSectionClick("projects")}
                >
                  Projects
                </button>
                <button
                  className="section-button-mobile"
                  onClick={() => handleMobileSectionClick("experience")}
                >
                  Experience
                </button>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-row justify-center pb-10 gap-8">
                <a
                  href="https://github.com/lorena-swe"
                  target="_blank"
                  className="icon-link"
                >
                  <IconGitHub />
                </a>
                <a
                  href="https://www.linkedin.com/in/lorena-zotaj/"
                  target="_blank"
                  className="icon-link"
                >
                  <IconLinkedin />
                </a>
                <a href="mailto:lorenazotaj10@gmail.com" className="icon-link">
                  <IconGmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
