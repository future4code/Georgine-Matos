import React from "react";
import { useState } from "react";
import "./App.css";
import Combinacao, {
  ContainerPai,
  ContainerHeader,
  Astro,
  Match,
  AstroMatch,
  Hr,
  ContainerFooter,
} from "./components/style";

import Perfil from "./components/Perfil";
import CheckIcon from "@mui/icons-material/Check";
import BotaoSim from "./components/styleBotaoSim";
import BotaoNao from "./components/styleBotaoNao";
import ClearIcon from "@mui/icons-material/Clear";
import Matchs from "./components/Matchs";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";
import ImgBack from "./components/ImgVoltar";

export const ImgUsuario = styled(ArrowBackIcon)` //o styled recebe como parametro a img do MUI 
  cursor: pointer;
  color: gray;
  &:hover {
    transition: ease-in-out 0.2s;
    color: #575757;
    transform: scale(1.3);
  }
`;

function App() {
  const [tela, setTela] = useState("Perfil");

  const pagAtual = () => {
    if (tela === "Perfil") {
      return <Perfil />;
    } else if (tela === "Matchs") {
      return <Matchs />;
    }
  };

  const mudaTela = (telaAtual) => {
    setTela(telaAtual);
  };

  return (
    <ContainerPai>
      <ContainerHeader>
        <ImgBack mudaTela={mudaTela}/>
        <AstroMatch>
          <Astro>astro</Astro>
          <Match>match</Match>
        </AstroMatch>
        <Combinacao mudaTela={mudaTela} />
      </ContainerHeader>
      <Hr />

      {pagAtual()}
      <ContainerFooter>
        <BotaoNao ico={ClearIcon} />
        <BotaoSim ico={CheckIcon} />
      </ContainerFooter>
    </ContainerPai>
  );
}

export default App;