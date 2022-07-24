import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./TelaInicial";
import Teste from "./Teste";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TelaInicial" element={<TelaInicial />} />
        <Route path="/Teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}
