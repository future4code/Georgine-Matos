import React from "react";
import styled from "styled-components";

const Interacao = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: coral;
`;

function CamposForm(props) {
  return <Interacao >{props.nome}, {props.idade}, {props.sexo}</Interacao>;
}

export default CamposForm;
