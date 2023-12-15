import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./index.css";

function App() {
  return (
    <div style={{ background: "var(--gray-bg)" }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
