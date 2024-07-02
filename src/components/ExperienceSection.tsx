import { useState } from "react";
import "./ExperienceSection.css";

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div
      id="experience"
      className="section h-screen w-full py-10 px-8 md:px-16 flex flex-col justify-center"
    >
      <div className="tabs-container">
        <div className="tabs-list">
          <button
            className={`tabs-trigger ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            Tab 1
          </button>
          <button
            className={`tabs-trigger ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            Tab 2
          </button>
          <button
            className={`tabs-trigger ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => setActiveTab("tab3")}
          >
            Tab 3
          </button>
        </div>
        <div className="tabs-content-container">
          {activeTab === "tab1" && (
            <div className="tabs-content">
              <p>Content for Tab 1</p>
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="tabs-content">
              <p>Content for Tab 2</p>
            </div>
          )}
          {activeTab === "tab3" && (
            <div className="tabs-content">
              <p>Content for Tab 3</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
