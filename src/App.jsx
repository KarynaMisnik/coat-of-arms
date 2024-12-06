import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Quiz from "./pages/Quiz/Quiz";
import Region from "./pages/Region/Region";
import SearchError from "./pages/Errors/SearchError";
import Municipality from "./pages/Municipality/Municipality";
import Footer from "./components/Footer";
import "./data/municipalities.json";
import "./index.css";
const pages = ["Home", "About", "Quiz"];

function App() {
  return (
    <div style={{ background: "var(--black)" }}>
      <Navbar pages={pages} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/search-error" element={<SearchError />} />
        <Route path="/region/:regionName" element={<Region />} />
        <Route
          path="/municipality/:regionName/:municipalityName"
          element={<Municipality />}
        />
      </Routes>
      <Footer pages={pages} />
    </div>
  );
}

export default App;
