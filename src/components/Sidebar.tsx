import { useState } from "react";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex py-5 px-8">
        <div className="hidden md:flex flex-col bg-gray-500">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 bg-gray-300">
            <h1 className="text-sm font-bold text-gray-800">Logo</h1>
          </div>

          {/* Section Buttons */}
          <div className="flex-1 flex flex-col justify-center">
            <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400">
              About
            </button>
            <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400">
              Projects
            </button>
            <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400">
              Experience
            </button>
            {/* Add more section buttons as needed */}
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col bg-gray-300">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 mx-2 text-center"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 mx-2 text-center"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 mx-2 text-center"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sibar Panel */}
      <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>📰</button>
      {isMobileMenuOpen && (
        <div className="flex md:hidden py-5 px-8">
          <div className="flex md:hidden flex-col bg-gray-500">
            {/* Logo */}
            <div className="flex items-center justify-center h-16 bg-gray-300">
              <h1 className="text-sm font-bold text-gray-800">Logo</h1>
            </div>

            {/* Section Buttons */}
            <div className="flex-1 flex flex-col justify-center">
              <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400">
                About
              </button>
              <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400">
                Projects
              </button>
              <button className="px-4 py-2 mb-2 text-gray-800 bg-gray-300 hover:bg-gray-400">
                Experience
              </button>
              {/* Add more section buttons as needed */}
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col bg-gray-300">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 mx-2 text-center"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 mx-2 text-center"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 mx-2 text-center"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
