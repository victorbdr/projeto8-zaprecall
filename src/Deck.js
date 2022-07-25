import React from "react";
import "./Estilo/Deck.css";
import FlashCard from "./FlashCard";

export default function Deck(props) {
  const decks = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];

  return (
    <>
      {decks.map((deck, index) => (
        <div className="Pergunta">
          <Conteudo
            baralho={deck}
            index={index}
            contador={props.contador}
            setContador={props.setContador}
          />
        </div>
      ))}
    </>
  );
}
function Conteudo(props) {
  const [resposta, setResposta] = React.useState(false);
  const [clicado, setClicado] = React.useState(false);
  const [status, setStatus] = React.useState("");

  return (
    <div
      onClick={() => {
        if (status === "") {
          if (!clicado) {
            setClicado(true);
          } else if (!resposta) {
            setResposta(true);
          }
        }
      }}
    >
      <div className={clicado ? "clicado" : "card "}>
        {clicado ? (
          <FlashCard
            index={props.index}
            mostraResposta={resposta}
            onAnswer={(answerStatus) => {
              setClicado(false);
              setStatus(answerStatus);
            }}
            contador={props.contador}
            setContador={props.setContador}
          />
        ) : (
          <div className="botoes">
            {status === "Zap!" ? (
              <>
                <div className={"verde"}>
                  {props.baralho}
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
              </>
            ) : null}
            {status === "Quase não lembrei" ? (
              <>
                <div className={"amarelo"}>
                  {props.baralho}
                  <ion-icon name="help-circle"></ion-icon>{" "}
                </div>
              </>
            ) : null}
            {status === "Não lembrei" ? (
              <>
                <div className={"vermelho"}>
                  {props.baralho}
                  <ion-icon name="close-circle"></ion-icon>
                </div>
              </>
            ) : null}
            {status === "" ? (
              <>
                <div className={"pergunta"}>
                  {props.baralho} <ion-icon name="play-outline"></ion-icon>
                </div>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
