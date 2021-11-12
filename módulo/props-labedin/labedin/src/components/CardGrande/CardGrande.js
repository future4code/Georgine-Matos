import React from "react";
import styled from "styled-components";

const ContainerPai = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const ContainerFilho = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

const Imagem = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Titulo = styled.h4`
  margin-bottom: 15px;
`;

function CardGrande(props) {
  return (
    <ContainerPai>
      <Imagem src={props.imagem} />
      <ContainerFilho>
        <Titulo>{props.nome}</Titulo>
        <p>{props.descricao}</p>
      </ContainerFilho>
    </ContainerPai>
  );
}

export default CardGrande;
