import IconExternal from "./icons/IconExternal";
import IconGitHub from "./icons/IconGitHub";
import SectionTitle from "./SectionTitle";
import background from "../assets/GameHubBackgorund.png";
import "./ProjectsSection.css";

const ProjectsSection = () => (
  <div
    id="projects"
    className="section min-h-screen w-full px-4 lg:px-24 flex items-center"
  >
    <div className="flex flex-col justify-center w-full">
      <SectionTitle sectionNumber={"02"} name="Things I've Built" />

      <div className="project-card flex lg:flex-row gap-4 lg:pl-8 xl:pl-20 pt-12">
        <div className="max-w-full xl:max-w-xl lg:pr-12">
          <div className="flex flex-row w-full items-center justify-between">
            <div className="project-title">
              <a
                href="https://lorena-swe-issue-tracker.vercel.app/"
                target="_blank"
              >
                Issue Tracker
              </a>
            </div>
            <div>
              <a
                href="https://github.com/lorena-swe/issue-tracker"
                target="_blank"
                className="icon-link"
              >
                <IconGitHub />
              </a>
              <a
                href="https://lorena-swe-issue-tracker.vercel.app/"
                target="_blank"
                className="icon-link"
              >
                <IconExternal />
              </a>
            </div>
          </div>
          <div className="project-desc">
            Issue Tracker is a web application designed to help teams manage and
            track issues efficiently. The app features a comprehensive dashboard
            for viewing the latest issues, a bar chart categorizing issues by
            their status (Open, In Progress, Closed), and an issue list page
            where all issues can be viewed and managed.
          </div>
          <ul className="tech-stack">
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>Tailwind CSS</li>
            <li>Radix UI</li>
            <li>NextAuth.js</li>
            <li>Prisma</li>
            <li>MySql</li>
          </ul>
        </div>
        <div className="hidden xl:flex flex-1 px-8 items-center">
          <img src={background} alt="Project Image" className="xl:max-w-sm" />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsSection;
