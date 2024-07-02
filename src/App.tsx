import "./App.css";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 overflow-y-auto scrollable">
        <MainSection />
      </div>
    </div>
  );
}

export default App;
