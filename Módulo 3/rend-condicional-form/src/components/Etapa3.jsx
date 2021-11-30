import React from "react";
import PerguntaFechada from "./PerguntaFechada";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <>
        <h1>Etapa 3: Dados educacionais</h1>
        <PerguntaFechada
          pergunta={"Por que voce não terminou o curso de graduação?"}
        ></PerguntaFechada>
        <input type="text" name="" id="" />
        <PerguntaFechada
          pergunta={"Alguma curso complementar?"}
        ></PerguntaFechada>
        <select name="" id="">
          <option value="">Nenhum</option>
          <option value="">Curso técnico</option>
          <option value="">Curso de línguas</option>
        </select>
      </>
    );
  }
}
