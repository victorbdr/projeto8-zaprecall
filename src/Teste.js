import "./Estilo/Teste.css";
import React from "react";
import Deck from "./Deck.js";
import Topo from "./Topo";
import Footer from "./Footer";

export default function Teste() {
  const [contador, setContador] = React.useState([]);

  const handleIcon = (icon) => {
    if (icon === "Zap!") {
      return (
        <div className="green">
          <ion-icon
            name="checkmark-circle-outline"
            className="green"
          ></ion-icon>
        </div>
      );
    }
    if (icon === "Quase não lembrei") {
      return (
        <div className="yellow">
          <ion-icon name="help-circle" className="yellow"></ion-icon>
        </div>
      );
    }
    if (icon === "Não lembrei") {
      return (
        <div className="red">
          <ion-icon name="close-circle" className="red"></ion-icon>{" "}
        </div>
      );
    }
  };

  return (
    <>
      <Topo />
      <Deck contador={contador} setContador={setContador} />
      <Footer contador={contador} />
      {contador?.map((item) => handleIcon(item))}
    </>
  );
}
