import React from "react";
import PerguntaFechada from "./PerguntaFechada";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <>
        <h1>Etapa 2: Dados educacionais</h1>
        <PerguntaFechada pergunta={"Qual o curso?"}></PerguntaFechada>
        <input type="text" name="" id="" />
        <PerguntaFechada
          pergunta={"Qual a unidade de ensino?"}
        ></PerguntaFechada>
        <input type="text" name="" id="" />
      </>
    );
  }
}
