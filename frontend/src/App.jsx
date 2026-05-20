import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CuestionarioExpertos from "./cuestionarioExpertos";
import CuestionarioPymes from "./cuestionarioPymes";
import Gracias from "./gracias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertos" element={<CuestionarioExpertos />} />
        <Route path="/pymes" element={<CuestionarioPymes />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
