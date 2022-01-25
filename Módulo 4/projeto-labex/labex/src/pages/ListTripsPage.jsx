import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Titulo = styled.div`
  color: #006585;
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 50px;
`;

const ContainerPai = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
  margin: 3% auto;
  padding: 20px;
`;

const ContainerFilho = styled.div`
  display: flex;
`;

const ContainerBotoes = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const Botoes = styled.button`
  cursor: pointer;
  border: none;
  height: 60px;
  font-size: 20px;
  height: 50px;
  width: 140px;
  padding: 5px;
  border-radius: 10px;
  background: #00a5da;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  margin-bottom: 20px;
  :hover {
    background: #006585;
    transition: all 0.4s ease-out;
  }
`;

const ContainerDadosDaViagem = styled.div`
  padding: 15px;
  border-radius: 10px;
  width: 80%;
  color: #006585;
  box-shadow: 1px 1px 20px 4px #888888;
`;

const Dado = styled.h3`
  display: inline-block;
  margin: 5px 0;
`;

function ListTripsPage() {
  const history = useHistory();

  const goToApplicationFormPage = () =>{
    history.push("/trips/application")
  }

  const goBack = () => {
    history.goBack();
  };

  return (
    <ContainerPai>
      <Titulo>Viagens Disponíveis</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
          <Botoes onClick={goToApplicationFormPage}>Inscrever-se</Botoes>
        </ContainerBotoes>
        <ContainerDadosDaViagem>
          <div>
            <Dado>Nome:</Dado>Havana
          </div>
          <div>
            <Dado>Descrição:</Dado>Logo ali, onde Judas perdeu
          </div>
          <div>
            <Dado>Planeta:</Dado>Terra
          </div>
          <div>
            <Dado>Duração:</Dado>50
          </div>
          <div>
            <Dado>Data:</Dado>31/07/2459
          </div>
        </ContainerDadosDaViagem>
      </ContainerFilho>
    </ContainerPai>
  );
}

export default ListTripsPage;
