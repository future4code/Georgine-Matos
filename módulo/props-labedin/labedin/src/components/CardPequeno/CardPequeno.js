import React from "react";
import styled from "styled-components";

const ContainerMaior = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 100px;
`;
const Imagem = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const ContainerMenor = styled.div`
  display: flex;
  justify-items: flex-start;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h4`
  margin-right: 5px;
`;

const CardPequeno = (props) => {
  return (
    <ContainerMaior>
      <Imagem src={props.imagem} />
      <ContainerMenor>
        <Titulo>{props.chave}</Titulo>
        <p>{props.descricao}</p>
      </ContainerMenor>
    </ContainerMaior>
  );
};

export default CardPequeno;
