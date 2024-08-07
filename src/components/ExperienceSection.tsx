import { useState, useEffect, useRef } from "react";
import CompanyHoverCard from "./CompanyHoverCard";
import "./ExperienceSection.css";
import SectionTitle from "./SectionTitle";

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [fadeClass, setFadeClass] = useState("fade-in");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Calculate the height of the tallest content and set it as the minimum height
    if (contentRef.current) {
      const tab1ContentHeight =
        contentRef.current.querySelector(".tab1-content")?.scrollHeight || 0;
      const tab2ContentHeight =
        contentRef.current.querySelector(".tab2-content")?.scrollHeight || 0;
      const tab3ContentHeight =
        contentRef.current.querySelector(".tab3-content")?.scrollHeight || 0;
      const maxHeight = Math.max(
        tab1ContentHeight,
        tab2ContentHeight,
        tab3ContentHeight
      );
      contentRef.current.style.minHeight = `${maxHeight + 15}px`;
    }
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setFadeClass("fade-out");
      setTimeout(() => {
        setActiveTab(tab);
        setFadeClass("fade-in");
      }, 500); // Match this duration with your animation duration
    }
  };

  return (
    <div
      id="experience"
      className="section min-h-screen w-full px-8 px-4 lg:px-24 flex items-center"
    >
      <div className="flex flex-col justify-center w-full">
        <SectionTitle sectionNumber="03" name="Where I've Worked" />

        <div className="tabs-container pt-12 flex flex-col md:flex-row">
          <div className="tabs-list hidden invisible md:flex flex-col md:visible min-w-48">
            <button
              className={`tabs-trigger w-full ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab1")}
            >
              Deloitte
            </button>
            <button
              className={`tabs-trigger w-full ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab2")}
            >
              Salesforce Industries
            </button>
            <button
              className={`tabs-trigger w-full ${
                activeTab === "tab3" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab3")}
            >
              Amazon
            </button>
          </div>
          <div className="flex flex-row md:hidden md:invisible w-full justify-between px-8 pb-8">
            <button
              className={`tabs-trigger-mobile ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab1")}
            >
              Deloitte
            </button>
            <button
              className={`tabs-trigger-mobile ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab2")}
            >
              Salesforce Industries
            </button>
            <button
              className={`tabs-trigger-mobile ${
                activeTab === "tab3" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab3")}
            >
              Amazon
            </button>
          </div>
          <div
            className="tabs-content-container max-w-full lg:max-w-xl"
            ref={contentRef}
          >
            {activeTab === "tab1" && (
              <div className={`tabs-content tab1-content ${fadeClass}`}>
                <div className="exp-title">
                  Frontend Engineer{" "}
                  <strong>
                    <CompanyHoverCard
                      label="Deloitte"
                      description="Deloitte is a global professional services firm offering audit, consulting, tax, and advisory services to clients in various industries, helping them navigate complex challenges and achieve growth."
                      followersCount="16M"
                      employeesCount="10K+"
                      link="https://www.linkedin.com/company/deloitte/"
                    />
                  </strong>
                </div>
                <p className="exp-date">December 2022 - Present</p>
                <ul className="exp-bullets">
                  <li>
                    Managed frontend development for an e-commerce website
                    migration project, developing 20 landing pages and over 70
                    frontend components using JavaScript, HTML, CSS, React, and
                    Jest.
                  </li>
                  <li>
                    Refined early design drafts by integrating advanced UX
                    principles, leading to a 30% improvement in user retention
                    and a significant 20% increase in client endorsement.
                  </li>
                  <li>
                    Optimized a streamlined customer service feature, enabling
                    visualization of unregistered accounts and bulk
                    re-invitation emails, improving efficiency by 40% and
                    reducing response times by 25%.
                  </li>
                  <li>
                    Enhanced backend calls efficiency in the checkout process,
                    resulting in 85% decrease in page load times, and created
                    intuitive drop-down menus with advanced search
                    functionalities, elevating user experience and increasing
                    engagement by 15%.
                  </li>
                  <li>
                    Conducted unit testing with Java across the entire codebase,
                    achieving an average coverage of 87%, ensuring robust
                    functionality and stability.
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className={`tabs-content tab2-content ${fadeClass}`}>
                <div className="exp-title">
                  Salesforce Developer{" "}
                  <strong>
                    <CompanyHoverCard
                      label="Salesforce Industries"
                      description="Salesforce is a leading cloud-based software company providing customer relationship management (CRM) solutions and enterprise applications focused on customer service, marketing automation, and analytics."
                      followersCount="5M"
                      employeesCount="10K+"
                      link="https://www.linkedin.com/company/salesforce/"
                    />
                  </strong>
                </div>
                <p className="exp-date">April 2022 - July 2022</p>
                <ul className="exp-bullets">
                  <li>
                    Configured, deployed, and maintained Salesforce Components
                    and metadata across three projects.
                  </li>
                  <li>
                    Executed rigorous testing and debugging of API requests
                    using Postman; reduced error rate by 10% by executing unit
                    and system tests, error handling, and bug fixes.
                  </li>
                  <li>
                    Coordinated with a 12-member cross-functional team,
                    utilizing daily stand-ups to sync development efforts,
                    streamline processes, increase project efficiency by 15%,
                    and meet all deadlines.
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className={`tabs-content tab3-content ${fadeClass}`}>
                <div className="exp-title">
                  IT Support Engineer Intern{" "}
                  <strong>
                    <CompanyHoverCard
                      label="Amazon"
                      description="Amazon is a multinational technology company specializing in e-commerce, cloud computing, digital streaming, and artificial intelligence, renowned for its vast online marketplace and innovative services."
                      followersCount="31M"
                      employeesCount="10K+"
                      link="https://www.linkedin.com/company/amazon/"
                    />
                  </strong>
                </div>
                <p className="exp-date">March 2021 - May 2021</p>
                <ul className="exp-bullets">
                  <li>
                    Developed and designed front-end interfaces for internal
                    tools and websites using JavaScript, HTML and CSS
                  </li>
                  <li>
                    Contributed to implementation discussions on daily meetings
                  </li>
                  <li>
                    Regularly interacted with management and staff to provide
                    analytical and technical assistance
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
