import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import ImgUser, {
  ContainerPai,
  ContainerHeader,
  Astro,
  Match,
  AstroMatch,
  Hr,
  ContainerFooter,
} from "./components/style";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Fotos from "./components/Fotos";
import CheckIcon from '@mui/icons-material/Check';
import BotaoSim from "./components/styleBotaoSim";
import BotaoNao from "./components/styleBotaoNao";
import ClearIcon from '@mui/icons-material/Clear';
import Matchs from "./components/Matchs";


function App() {
  const [tela, setTela] = useState()
  
  return (
    <ContainerPai>
      <ContainerHeader>
        <AstroMatch>
          <Astro>astro</Astro>
          <Match>match</Match>
        </AstroMatch>
        <ImgUser icoHeader={GroupAddIcon} alt="Ver Matchs"/>
      </ContainerHeader>
      <Hr/>
      <Fotos/>
      {/* <Matchs/> */}
      <ContainerFooter>
        <BotaoNao ico={ClearIcon}/>
        <BotaoSim ico={CheckIcon}/>
      </ContainerFooter>
    </ContainerPai>
  );
}

export default App;
