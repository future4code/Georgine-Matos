import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Base_URL } from "./utils/constants";
import { BeatLoader } from "react-spinners";
import { pegaViagens } from "../services/RequestApi";

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
  width: 100%;
`;

const ContainerBotoes = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const ContainerViagens = styled.div`
  width: 100%;
`;

const Botoes = styled.button`
  cursor: pointer;
  border: none;
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
  font-size: 14px;
  border-radius: 10px;
  width: 94%;
  color: #006585;
  box-shadow: 1px 1px 20px 4px #888888;
  margin-bottom: 30px;
  transition: all 0.4s ease-out;
  :hover {
    box-shadow: 1px 1px 20px 4px #272727;
    transition: all 0.4s ease-out;
  }
`;

const Dado = styled.h3`
  display: inline-block;
  margin: 5px 0;
`;

const Spinner = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ListTripsPage() {
  const history = useHistory();
  const [listaViagens, setListaViagens] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  const goBack = () => {
    history.goBack();
  };

  const mostrarViagens = async () => {
    const response = await pegaViagens();
    response?.trips && setListaViagens(response.trips);
    setLoading(false);
  };

  useEffect(() => {
    mostrarViagens();
  }, []);

  return (
    <ContainerPai>
      <Titulo>Viagens Disponíveis</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
          <Botoes onClick={goToApplicationFormPage}>Inscrever-se</Botoes>
        </ContainerBotoes>
        <ContainerViagens>
          {loading ? (
            <Spinner>
              <BeatLoader color="#00a5da" />
            </Spinner>
          ) : (
            listaViagens.map((viagem, index) => {
              return (
                <ContainerDadosDaViagem key={index}>
                  <div>
                    <Dado>Nome:</Dado>
                    {viagem.name}
                  </div>
                  <div>
                    <Dado>Descrição:</Dado>
                    {viagem.description}
                  </div>
                  <div>
                    <Dado>Planeta:</Dado>
                    {viagem.planet}
                  </div>
                  <div>
                    <Dado>Duração:</Dado>
                    {viagem.durationInDays}
                  </div>
                  <div>
                    <Dado>Data:</Dado>
                    {viagem.date}
                  </div>
                </ContainerDadosDaViagem>
              );
            })
          )}
        </ContainerViagens>
      </ContainerFilho>
    </ContainerPai>
  );
}

export default ListTripsPage;
