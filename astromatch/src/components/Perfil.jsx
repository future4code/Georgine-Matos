import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ImgUser, { Match, Astro, AstroMatch, ContainerHeader } from "./style";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const CardPerfil = styled.div`
  position: relative;
  margin-top: 15px;
  width: 100%;
  height: 77%;
  background: yellow;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 15px 1px #464646;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    backdrop-filter: blur(200px) opacity(50%);
    width: 94%;
    position: absolute;
    color: white;
    padding: 0 15px;
    bottom: 0;
  }
`;

export default function Perfil() {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    ChamaPerfil();
  }, []);

  const ChamaPerfil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matos/person`
      )
      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (<>
    <CardPerfil>      
      <img src={perfil.photo}></img>
      <div>
        <h2>
          {perfil.name}, {perfil.age}
        </h2>
        <p>{perfil.bio}</p>
      </div>
    </CardPerfil>
    </>
  );
}
