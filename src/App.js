import "./App.css";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import MyExperience from "./Components/MyExperience";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="bg-[black] h-screen font-sans">
      <Sidebar />
      {/* <About /> */}
      {/* <MyExperience /> */}
      <Projects />
    </div>
  );
}

export default App;
