import React, { Component } from "react";
import CriaPlaylist from "./components/CriaPlaylist";
import Playlists from './components/Playlists';

export default class App extends Component {
  state = {
    pagAtual: "atual",
  };

  mudaPagina = () => {
    if (this.state.pagAtual === "atual") {
      this.setState({ pagAtual: "playlist" });
    } else {
      this.setState({ pagAtual: "atual" });
    }
  };

  render() {
    return <>
    <button onClick={this.mudaPagina}>Verificar Playlists</button>
    {this.state.pagAtual === 'atual'?<CriaPlaylist/>:<Playlists/>}
    </>;
  }
}
