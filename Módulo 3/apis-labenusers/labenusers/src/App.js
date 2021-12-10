import React from 'react'
import axios from 'axios';

class App extends React.Component {
  state = {
    listaUsuarios: [],
    inputEmail: "",
    inputNome: ""
  };

  componentDidMount() {
    this.pegaUsuarios();
  }

  mudaInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  mudaInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };

  salvaUsuario = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };

    const headers = {
      headers: {
        Authorization: "danilo-matos-joy"
      }
    };

    axios
      .post(URL, body, headers)
      .then((response) => {
        alert("sucesso, usuario criado");
        this.pegaUsuarios();
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("falha ao salvar usuario");
      });
    this.setState({ inputEmail: "" });
    this.setState({ inputNome: "" });
  };

  pegaUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "danilo-matos-joy"
          }
        }
      )
      .then((res) => {
        this.setState({ listaUsuarios: res.data });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  apagarUsuario = (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${id}`;

    const headers = {
      headers: {
        Authorization: "danilo-matos-joy"
      }
    };

    axios
      .delete(URL, headers)
      .then((res) => {
        console.log("sucesso, usuário deletado");
        this.pegaUsuarios();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    // const copiaListaUsuarios = [...this.state.listaUsuarios];
    // copiaListaUsuarios.splice(index, 1);
    // this.setState({ listaUsuarios: copiaListaUsuarios });
  };

  render() {
    const listaUsuario = this.state.listaUsuarios.map((usuario, index) => {
      return (
        <div key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.apagarUsuario(index)}>Apagar</button>
        </div>
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          placeholder="Email"
          onChange={this.mudaInputEmail}
          value={this.state.inputEmail}
        />
        <input
          type="text"
          placeholder="Nome"
          onChange={this.mudaInputNome}
          value={this.state.inputNome}
        />
        <button onClick={this.salvaUsuario}>Enviar</button>
        <p></p>
        {listaUsuario}
      </div>
    );
  }
}
export default App;
