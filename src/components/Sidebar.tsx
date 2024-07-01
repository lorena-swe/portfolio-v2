import { useState } from "react";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen py-5 px-8">
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
      <button
        className="md:hidden absolute top-0 right-0 p-3"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        📰
      </button>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex justify-end z-50">
          <div className="h-full w-full max-w-xs">
            <div className="flex md:hidden h-full m-0 py-5 px-8">
              <div className="flex md:hidden flex-col bg-gray-500 h-full w-full">
                <button
                  className="self-end mb-4"
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                  ✖️
                </button>

                {/* Logo */}
                <div className="flex items-center h-16 bg-gray-300">
                  <h1 className="text-sm font-bold text-gray-800">Logo</h1>
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
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 mx-2"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 mx-2"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 mx-2"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
