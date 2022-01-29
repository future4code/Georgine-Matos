import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_URL } from "./utils/constants";
import { pegaViagens } from "../services/RequestApi";
import { BeatLoader } from "react-spinners";

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
  width: 100%;
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
  width: 90%;
  color: #006585;
  box-shadow: 1px 1px 20px 4px #888888;
`;

const Dado = styled.h3`
  display: inline-block;
  margin: 5px 0;
`;

const ContainerCadidatosPendentes = styled.div`
  margin-top: 20px;
  width: 89.5%;
  color: #006585;
  background-color: white;
`;

const ContainerCadidatosAprovador = styled.div`
  margin-top: 20px;
  width: 89.5%;
  color: #006585;
  background-color: white;
`;

const BotaoReprovar = styled.button`
  cursor: pointer;
  font-size: 20px;
  border: none;
  height: 40px;
  padding: 5px 8px;
  border-radius: 10px;
  background: #dc3545;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  margin: 20px 0;
  :hover {
    background: #a01c28;
    transition: all 0.4s ease-out;
  }
`;

const BotaoAprovar = styled.button`
  cursor: pointer;
  font-size: 20px;
  border: none;
  height: 40px;
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  background: #28a745;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  margin: 20px 0;
  :hover {
    background: #186229;
    transition: all 0.4s ease-out;
  }
`;

const DivDados = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Fildset = styled.fieldset`
  border: 1px solid #006585;
  width: 100%;
  border-radius: 10px;
`;

const DivBotoes = styled.div`
  display: flex;
  min-width: 230px;
  justify-content: space-between;
`;

const DivCandidatoEBotoes = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Spinner = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TripDetailsPage() {
  const params = useParams();
  const [listaViagens, setListaViagens] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const goBack = () => {
    history.goBack();
  };

  // const mostrarViagens = async () => {
  //   const response = await pegaViagens();
  //   response?.trips && setListaViagens(response.trips);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   mostrarViagens();
  // }, []);

  console.log(params);
  return (
    <ContainerPai>
      <Titulo>Destino / Passageiros</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
        </ContainerBotoes>
        <DivDados>
          {loading ? (
            <Spinner>
              <BeatLoader color="#00a5da" />
            </Spinner>
          ) : (
            listaViagens.map((viagem) => {
              return ( viagem.id === params
                // <ContainerDadosDaViagem key={index}>
                //   <div>
                //     <Dado>Nome:</Dado>
                //     {viagem.name}
                //   </div>
                //   <div>
                //     <Dado>Descrição:</Dado>
                //     {viagem.description}
                //   </div>
                //   <div>
                //     <Dado>Planeta:</Dado>
                //     {viagem.planet}
                //   </div>
                //   <div>
                //     <Dado>Duração:</Dado>
                //     {viagem.durationInDays}
                //   </div>
                //   <div>
                //     <Dado>Data:</Dado>
                //     {viagem.date}
                //   </div>
                // </ContainerDadosDaViagem>

                // <ContainerCadidatosPendentes>
                //   <Fildset>
                //     <legend>
                //       <strong>Candidatos Pendentes</strong>
                //     </legend>
                //     <DivCandidatoEBotoes>
                //       <p>Candidato1</p>
                //       <DivBotoes>
                //         <BotaoReprovar>Reprovar</BotaoReprovar>
                //         <BotaoAprovar>Aprovar</BotaoAprovar>
                //       </DivBotoes>
                //     </DivCandidatoEBotoes>
                //   </Fildset>
                // </ContainerCadidatosPendentes>
                // <ContainerCadidatosAprovador>
                //   <Fildset>
                //     <legend>
                //       <strong>Candidatos Aprovados</strong>
                //     </legend>
                //     <p>Candidato 1</p>
                //     <p>Candidato 2</p>
                //     <p>Candidato 3</p>
                //   </Fildset>
                // </ContainerCadidatosAprovador>
              );
            })
          )}
        </DivDados>
      </ContainerFilho>
    </ContainerPai>
  );
}

export default TripDetailsPage;
