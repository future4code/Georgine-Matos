import React, { Component } from "react";
import axios from "axios";

export default class CriaPlaylist extends Component{
    state={
        name:''
    }

    mudaInputNome = (e) => {
        this.setState({name: e.target.value})
    }

    criarPlaylist = () => {
        const axiosConfig = {
            headers:{
                Authorization: "danilo-matos-joy"
            }
        };
        const body = {
            name: this.state.name
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig)
        .then(()=>{
            alert(`Playlist ${this.state.name} criada com sucesso`)
            this.setState({name:''})
        })
        .catch(()=>{
            alert("Erro ao criar playlist. Nome já utilizado")
            this.setState({name:''})
        })
    }

    render(){
        return(
            <>
                <input
                    placeholder="Nome da playlist"
                    value={this.state.name}
                    onChange={this.mudaInputNome}
                />
                <button onClick={this.criarPlaylist}>Criar Playlist</button>
            </>
        )
    }
}