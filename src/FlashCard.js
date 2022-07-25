import React from "react";
import "./flashcard.css";
export default function FlashCard(props) {
  const questions = [
    {
      questao: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      questao: "O React é __ ",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      questao: "Componentes devem iniciar com __",
      resposta: "letra maiúscula",
    },
    { questao: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    {
      questao: "O ReactDOM nos ajuda __",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      questao: "Usamos o npm para __",
      resposta: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      questao: "Usamos props para __",
      resposta: "passar diferentes informações para componentes ",
    },
    {
      questao: "Usamos estado (state) para __",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  return (
    <>
      <TurnAround
        ask={questions[props.index].questao}
        answer={questions[props.index].resposta}
        key={props.index}
        mostraResposta={props.mostraResposta}
        onAnswer={props.onAnswer}
      />
    </>
  );
}
function TurnAround(props) {
  return (
    <div className="flash">
      {!props.mostraResposta ? (
        props.ask
      ) : (
        <>
          {props.answer}
          <div className="botaocontainer">
            <div className="botaoVerde" onClick={() => props.onAnswer("Zap!")}>
              Zap!
            </div>
            <div
              className="botaoAmarelo"
              onClick={() => props.onAnswer("Quase não lembrei")}
            >
              Quase não lembrei
            </div>
            <div
              className="botaoVermelho"
              onClick={() => props.onAnswer("Não lembrei")}
            >
              Não lembrei
            </div>
          </div>
        </>
      )}
    </div>
  );
}
