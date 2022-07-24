import { Link } from "react-router-dom";
import "./style.css";
export default function TelaInicial() {
  return (
    <div className="telaInicial">
      <img src="./image 1.png" alt="logo" />
      <h1>ZapRecall</h1>
      <Link to="/Teste">Iniciar Recall!</Link>
    </div>
  );
}
