import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./TelaInicial";
import Teste from "./Teste";
import "./Estilo/app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/Teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}
