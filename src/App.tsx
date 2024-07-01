import "./App.css";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/* <h3 style={{ color: "#ffcbf2" }}>Hello World!</h3>
      <h3 style={{ color: "#e2afff" }}>Hello World!</h3>

      <h3 style={{ color: "#d0d1ff" }}>Hello World!</h3>

      <h3 style={{ color: "#c0fdff" }}>Hello World!</h3>
      <h3>Hello World!</h3> */}

      <div className="flex flex-row h-screen">
        {/* Sidebar */}
        <div>
          {/* Fixed width sidebar for medium screens and up */}
          <Sidebar />
        </div>

        {/* Main Section */}
        <div className="flex-1 overflow-y-auto">
          <MainSection />
        </div>
      </div>
    </>
  );
}

export default App;
