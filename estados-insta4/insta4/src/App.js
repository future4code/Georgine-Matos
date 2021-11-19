import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        key: new Date(),
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/51/51",
        fotoPost: "https://picsum.photos/200/155",
      },
      {
        key: new Date(),
        nomeUsuario: "Pessoa1",
        fotoUsuario: "https://picsum.photos/51/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        key: new Date(),
        nomeUsuario: "Pessoa2",
        fotoUsuario: "https://picsum.photos/51/49",
        fotoPost: "https://picsum.photos/200/149",
      },
    ],

    valorKey: new Date(),
    informacaoUm: "",
    informacaoDois: "",
    informacaoTres: "",
  };

  capturaInformcaoUm = (e) => {
    this.setState({
      informacaoUm: e.target.value,
    });
  };

  capturaInformacaoDois = (e) => {
    this.setState({
      informacaoDois: e.target.value,
    });
  };

  capturaInformacaoTres = (e) => {
    this.setState({
      informacaoTres: e.target.value,
    });
  };

  adicionaInformacao = () => {
    const copiaPost = [...this.state.posts];

    const novoPost = {
      nome: this.state.informacaoUm,
      idade: this.state.informacaoDois,
      sexo: this.state.informacaoTres
  };

  copiaPost.push(novoPost);
  this.setState({posts: copiaPost})
}

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      console.log(post)
      return (
        <>        
          <Post
            key={post.key}
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
            nome={post.nome}
            idade={post.idade}
            sexo={post.sexo}
          /> 
        </>
      );
    });
    return (
      <MainContainer>
        <input onChange={this.capturaInformcaoUm} />
        <input onChange={this.capturaInformacaoDois} />
        <input onChange={this.capturaInformacaoTres} />
        <button onClick={this.adicionaInformacao}>Enviar</button>
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
