import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import axios from "axios";
import { useState } from "react";

const Sim = styled(CheckIcon)`
  cursor: pointer;
  color: green;
  &:hover {
    transition: ease-in-out 0.2s;
    transform: scale(1.3);
  }
`;

const MatchSim = (props) => {
  // const [listaMatch, setlistaMatch] = useState();
  const body = {
    id: props.key,
    choice: true,
  };
  // axios
  //   .POST(
  //     `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/danilo/choose-person`,
  //     body
  //   )
  //   .then((response) => {
  //       console.log(response);
  //     setlistaMatch(response.data.isMatch);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  console.log(body.id);
};

export default function BotaoSim() {
  return <Sim sx={{ width: 60, height: 60 }} onClick={MatchSim}></Sim>;
}
