import React, { Component } from "react";
import axios from "axios";
import DetalhePlaylists from "./DetalhePlaylists";

// const BotaoDelete = styled.button`
//     color: white;
//     background-color: red
//      cursor: pointer
// `

export default class Playlists extends Component {
  state = {
    playLists: [],
    pagAtual: "playLists",
    playListID: "",
    name: "",
  };

  componentDidMount() {
    this.carregaLista();
  }

  carregaLista = () => {
    const axiosConfig = {
      headers: {
        Authorization: "danilo-matos-joy",
      },
    };

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then((response) => {
        this.setState({ playLists: response.data.result.list});
      });
  };

  deletaPlaylist = (playListID) => {
    const axiosConfig = {
      headers: {
        Authorization: "danilo-matos-joy",
      },
    };

    if (window.confirm("Tem certeza que deseja apagar a playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${playListID}`,
          axiosConfig
        )
        .then(() => {
          alert("Playlist apagada com sucesso!");
          this.carregaLista();
        })
        .catch((e) => {
          alert("Erro ao excluir playlist");
          console.log(e);
        });
    }
  };

  mostraLista = (playListID) => {
    if (this.state.pagAtual === "playLists") {
      this.setState({ pagAtual: "detalheLista", playListID: playListID });
    } else {
      this.setState({ pagAtual: "playLists", playListID: "" });
    }
  };

  buscaPlaylist = (e) => {
    const novoNameInput = e.target.value;
    this.setState({ name: novoNameInput });
  };

  novaBuscaPlayList = () => {
    const axiosConfig = {
      headers: {
        Authorization: "danilo-matos-joy",
      },
    };

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?${this.state.name}`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ playLists: response.data });
      })
      .catch((error) => {
        alert("Erro ao buscar playlist");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.pagAtual === "playLists" ? (
          <div>
            <ul>
              {this.state.playLists.length === 0 && <div>Carregando Playlists...</div>}
              {this.state.playLists.map((playlist) => {
                return (
                  <li key={playlist.id}>
                    <span onClick={() => {this.mostraLista(playlist.id)}}>{playlist.name}</span>
                    <button onClick={() => {this.deletaPlaylist(playlist.id)}}>Excluir</button>
                  </li>
                  );
                })}
            </ul>
            <hr />
            <h3>Procurar playlist</h3>
            <input
              placeholder="Nome da playlist"
              type="text"
              value={this.state.name}
              onChange={this.novaBuscaPlayList}
            />
            <button onClick={this.novaBuscaPlayList}>Buscar playlist</button>
          </div>
        ) : (
          <DetalhePlaylists
            userId={this.state.playListID}
            changePage={this.mostraLista}
          />
        )}
      </div>
    );
  }
}
