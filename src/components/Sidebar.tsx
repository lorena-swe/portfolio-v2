import { useState } from "react";
import {
  FaAddressCard,
  FaBriefcase,
  FaCode,
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/react.svg";
import SectionButton from "./SectionButton";
import "./Sidebar.css";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSectionClick = (sectionName: string) => {
    setCurrentSection(sectionName);
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
            <a href="/" className="text-center">
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
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/lorena-swe"
              target="blank"
              className="text-center"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lorena-zotaj/"
              target="blank"
              className="text-center"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:lorenazotaj10@gmail.com" className="text-center">
              <FaEnvelopeOpenText />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sibar Panel */}
      <button
        className="md:hidden absolute top-0 right-0 p-3"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        📰
      </button>
      {isMobileMenuOpen && (
        <div
          className={`sidebar fixed inset-0 z-50 flex justify-end ${
            isMobileMenuOpen ? "open" : "closed"
          }`}
        >
          <div className="h-full w-full max-w-xs bg-gray-500">
            <div className="flex md:hidden flex-col h-full w-full">
              <button
                className="self-end mb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✖️
              </button>

              {/* Logo */}
              <div className="flex items-center h-16 bg-gray-300">
                <img alt="Logo" src={logo} />
              </div>

              {/* Section Buttons */}
              <div className="flex-1 flex flex-col">
                <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400 text-left">
                  About
                </button>
                <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400 text-left">
                  Projects
                </button>
                <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400 text-left">
                  Experience
                </button>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-row bg-gray-300 pb-5">
                <a href="#" className="text-gray-800 hover:text-gray-600 mx-2">
                  GitHub
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600 mx-2">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600 mx-2">
                  Email
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
