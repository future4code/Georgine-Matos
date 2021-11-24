import React from "react";
import PerguntaAberta from "./PerguntaAberta";

export default class Etapa1 extends React.Component {
  state = {
    inputNome: '',
    inputIdade: '',
    inputEmail: '',
    inputEscolaridade:'',
    tamanhoNome: 0
  }

  checaInputNome = (e) =>{
    this.setState({inputNome: e.target.value})
  }

  // checaTamanhoNome = () => {
  //   if (this.state.tamanhoNome.length <= 0){
  //     <p>Nome Invalido</p>
  //   }
  // }

  checaInputIdade = (e) =>{
    this.setState({inputIdade: e.target.value})
  }

  checaInputEmail = (e) =>{
    this.setState({inputEmail: e.target.value})
  }

  checaInputEscolaridade = (e) =>{
    this.setState({inputEscolaridade: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Etapa 1: Dados pessoais</h1>
        <PerguntaAberta pergunta={"Qual o seu nome?"}></PerguntaAberta>
        <input type="text" name="" id="" onChange={this.checaInputNome}/>
        <PerguntaAberta pergunta={"Qual sua idade?"}></PerguntaAberta>
        <input type="number" name="" id="" onChange={this.checaInputIdade}/>
        <PerguntaAberta pergunta={"Qual o seu email?"}></PerguntaAberta>
        <input type="email" name="" id="" onChange={this.checaInputEmail}/>
        <PerguntaAberta pergunta={'Qual sua escolaridade?'}></PerguntaAberta>
        <select name="" id="">
          <option value="">Ensino médio incompleto</option>
          <option value="">Ensino médio completo</option>
          <option value="">Ensino superior incompleto</option>
          <option value="">Ensino superior completo</option>
        </select>
      </>
    );
  }
}
