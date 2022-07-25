import { Link } from "react-router-dom";
import "./Estilo/telainicial.css";
export default function TelaInicial() {
  return (
    <>
      <div className="telaInicial">
        <img className="imginicial" src="./img/image 1.png" alt="logo" />
        <h1>ZapRecall</h1>
        <Link className="link" to="/Teste">
          Iniciar Recall!
        </Link>
      </div>
    </>
  );
}
