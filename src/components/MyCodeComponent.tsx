import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./MyCodeComponent.css";

const codeString = `
const developer = {
  fullName: "Lorena Zotaj",
  skills: ["React", "JavaScript", "TypeScript",
  "Next.js", "HTML & CSS", "Python", "Java",
  "SQL","Git", "..."],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};
`;

const MyCodeComponent = () => (
  <div className="code-tab">
    <div className="tab-header">
      <span className="dot red"></span>
      <span className="dot yellow"></span>
      <span className="dot green"></span>
    </div>
    <div className="code-container">
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  </div>
);

export default MyCodeComponent;
