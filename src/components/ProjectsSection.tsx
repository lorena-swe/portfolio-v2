import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => (
  <div
    id="projects"
    className="section min-h-screen w-full py-12 px-4 lg:px-24 flex items-center"
  >
    <div className="flex flex-col justify-center w-full">
      <SectionTitle sectionNumber={"02"} name="Things I've Built" />

      <div className="flex flex-col gap-8">
        <ProjectCard
          name="Issue Tracker"
          repoLink="https://github.com/lorena-swe/issue-tracker"
          liveLink="https://lorena-swe-issue-tracker.vercel.app/"
          description="Issue Tracker is a web application designed to help teams manage and track issues efficiently. The app features a comprehensive dashboard for viewing the latest issues, a bar chart categorizing issues by their status (Open, In Progress, Closed), and an issue list page where all issues can be viewed and managed."
          skills={[
            "Next.js",
            "React",
            "TypeScript",
            "HTML",
            "Tailwind CSS",
            "Radix UI",
            "MySQL",
            "Prisma",
            "NextAuth.js",
          ]}
        />
        <ProjectCard
          name="Game Hub"
          repoLink="https://github.com/lorena-swe/game-hub"
          liveLink="https://lorena-swe-game-hub.vercel.app/"
          description="Worked with the RAWG.io API to develop a web app displaying a comprehensive list of video games, which can then be filtered by keywords, genres, platforms, as well as sorted by multiple variables. The website also provides loading skeletons for a seamless and interactive user experience!"
          skills={["React", "TypeScript", "HTML", "CSS", "Chakra UI"]}
        />
        <ProjectCard
          name="Little Lemon Restaurant"
          repoLink="https://github.com/lorena-swe/little-lemon-restaurant"
          liveLink="https://lorena-swe.github.io/little-lemon-restaurant/"
          description="This project was built as the final project for Meta's Frontend Engineer certificate. It was my first time using React, yet it felt like home due to my experience in Salesforce Lightning. I even went ahead and built way more functionalities than what was required to complete the certificate's courses!"
          skills={["React", "JavaScript", "HTML", "CSS", "Firebase"]}
        />
      </div>
    </div>
  </div>
);

export default ProjectsSection;
