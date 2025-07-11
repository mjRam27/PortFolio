import { Routes, Route } from "react-router-dom";
import Header from "./components/Navbar"; 
import Home from "./pages/Home"; // <- Double-check this path matches your structure!

function App() {
  return (
    <>
    <Header /> 
    <div className="overflow-x-hidden">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div style={{ color: "white", textAlign: "center", padding: "2rem" }}>404 Not Found</div>} />
    </Routes>
    </div>
    </>
  );
}

export default App;
