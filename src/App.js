import "./App.css";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import MyExperience from "./Components/MyExperience";
import Projects from "./Components/Projects";
import AllProject from "./Components/All Projects/AllProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900 h-screen  font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<About />} />

            <Route path="MyExperience" element={<MyExperience />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="AllProjects" element={<AllProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{
  /* <Route
path="/"
element={<Sidebar active={active} setActive={setActive} />}
> */
}

export default App;
