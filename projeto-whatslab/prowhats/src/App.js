import "./App.css";
import Input from "./components/Input";
import BotaoEnviar from "./components/Botao";
import React from "react";

class App extends React.Component {
  state = {
    mensagem: [
      {
        nomeUsuario: "user1",
        mensUsuario: "men user 1",
      },
      {
        nomeUsuario: "user2",
        mensUsuario: "men user 2",
      },
    ],
    inputNome: "",
    inputMensagem: "",
  };

  enviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem,
    };

    const novasMensagens = [...this.state.mensagem];
    novasMensagens.push(novaMensagem);
    this.setState({ mensagem: novasMensagens });
  };

  capturaMudancaInputNome = (e) => {
    this.setState({
      inputNome: e.target.value,
    });
  };

  capturaMudancaInputMensagem = (e) => {
    this.setState({
      inputMensagem: e.target.value,
    });
  };
  render() {
    const mensagem = this.state.mensagem.map((men) => {
      return (
        <div>
          {men.nomeUsuario},{men.mensUsuario}
        </div>
      );
    });
    return (
      <div className="App">
        <div className="container">
          <div className="containerMensagem">{mensagem}</div>
          <div className="containerInteracao">
            <Input
              name="nome"
              width="22%"
              Placeholder="Usuário"
              value={this.state.inputNome}
              mudanca={this.capturaMudancaInputNome}
            />
            <Input
              mesagem="mensagem"
              width="50%"
              Placeholder="Mensagem"
              value={this.state.inputMensagem}
              mudanca={this.capturaMudancaInputMensagem}
            />
            <BotaoEnviar width="10%" Clique={this.enviarMensagem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
