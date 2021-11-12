import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import imgPerfil from "./img/perfil.jpg";
import servPub from "./img/servpub.jpg";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import Email from "./img/email.png";
import Maps from "./img/maps.png";
import styled from "styled-components";

const AlinhamentoGeral = styled.body`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <AlinhamentoGeral>
      <div>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={imgPerfil}
          nome="Geórgine Danilo"
          descricao="Oi, eu sou o Danilo. Sou aluno web fullstack labenu"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno imagem={Email} chave="Email:" descricao="emailficticio@gmail.com"/>

        <CardPequeno imagem={Maps} chave="Endereço:" descricao="Av Ficticia"/>
      </div>

      <div>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={servPub}
          nome="Serviço Público"
          descricao="Coordenação de departamento"
        />
      </div>

      <div>
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      
      </div>
    </AlinhamentoGeral>
  );
}

export default App;
