import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Quiz from "./pages/Quiz/Quiz";
import Region from "./pages/Region/Region";
import Municipality from "./pages/Municipality/Municipality";
import "./data/municipalities.json";
import "./index.css";
const pages = ["Home", "About", "Quiz"];

function App() {
  return (
    <div style={{ background: "var(--gray-bg)" }}>
      <Navbar pages={pages} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/region/:regionName" element={<Region />} />
        <Route
          path="/municipality/:regionName/:municipalityName"
          element={<Municipality />}
        />
      </Routes>
    </div>
  );
}

export default App;
