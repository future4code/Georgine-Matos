import React, { Component } from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "danilo-matos-joy",
  },
};

export default class DetalhePlaylists extends Component {
  state = {
    detalhePlaylist: {},
    edicaoPlaylist: "botaoEditar",
    name: "",
  };

  componentDidMount() {
    this.carregaListaDetalhada();
  }

  carregaListaDetalhada = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${this.props.playListID}`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ detalhePlaylist: response.data });
      })
      .catch((error) => {
        alert("Erro ao buscar playlist");
        console.log(error);
      });
  };

  mudarEdicaoPlaylist = () => {
    if (this.state.edicaoPlaylist === "botaoEditar") {
      this.setState({ edicaoPlaylist: "formEdicaoPlaylist" });
    } else {
      this.setState({ edicaoPlaylist: "botaoEditar" });
    }
  };

  mudaNome = (e) => {
    const novoValorNome = e.target.value;
    this.setState({ name: novoValorNome });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.name,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        axiosConfig
      )
      .then(() => {
        this.setState({ name: "" });
        this.carregaListaDetalhada();
        this.mudarEdicaoPlaylist();
        alert(`Playlist ${this.state.name} editada com sucesso`);
      })
      .catch((error) => {
        alert("Erro ao editar playlist");
        console.log(error);
      });
  };

  render() {
    const editaPlaylist =
      this.state.edicaoPlaylist === "botaoEditar" ? (
        <button onClick={this.mudarEdicaoPlaylist}>Editar playlist</button>
      ) : (
        <div>
          <input
            placeholder="Playlist"
            type="text"
            value={this.state.name}
            onChange={this.mudaNome}
          />
          <button onClick={this.criarPlaylist}>Salvar edição</button>
        </div>
      );
    return (
      <div>
        <div>{this.state.detalhePlaylist.name}</div>
        <div>{editaPlaylist}</div>
        <hr />
        <button onClick={this.props.mostraLista}>Voltar para playlist</button>
      </div>
    );
  }
}
