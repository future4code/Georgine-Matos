import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Base_URL } from "./utils/constants";
import { useParams } from "react-router-dom";

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
  width: 180px;
  padding: 5px;
  border-radius: 10px;
  background: #00a5da;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  margin-bottom: 40px;
  :hover {
    background: #006585;
    transition: all 0.4s ease-out;
  }
`;

const BotaoSair = styled.button`
  cursor: pointer;
  border: none;
  height: 60px;
  width: 180px;
  padding: 5px;
  border-radius: 10px;
  background: #dc3545;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  margin-bottom: 40px;
  :hover {
    background: #a01c28;
    transition: all 0.4s ease-out;
  }
`;

const BotaoDeletar = styled.button`
  cursor: pointer;
  font-size: 20px;
  border: none;
  height: 40px;
  width: 90px;
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

const ContainerViagem = styled.form`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  color: #006585;
  box-shadow: 1px 1px 20px 4px #888888;
  margin-bottom: 20px;
  transition: all 0.4s ease-out;
  :hover {
    box-shadow: 1px 1px 20px 4px #272727;
    transition: all 0.4s ease-out;
  }
`;

const ContainerViagens = styled.div`
  width: 80%;
`;

function ViagensCadastradas() {
  const [listaViagens, setListaViagens] = useState([]);
  // const params = useParams();
  const history = useHistory();
  const token = localStorage.getItem("token");

  const goBack = () => {
    history.goBack();
  };

  const createTrip = () => {
    history.push("/admin/trips/create");
  };

  useEffect(() => {
    token
      ? axios
          .get(`${Base_URL}/trips`, {
            headers: {
              auth: token,
            },
          })
          .then((response) => {
            setListaViagens(response.data.trips);
          })
          .catch((error) => console.log(error))
      : history.push("/login");
  }, [token, history]);

  const deletaViagem = async (idViagem) => {
    await axios
      .delete(`${Base_URL}/trips/${idViagem}`, {
        headers: {
          auth: token,
        },
      })
      .then(() => console.log("exlusao invocada"))
      .catch((error) => console.log(error));
  };

  return (
    <ContainerPai>
      <Titulo>Painel Administrativo</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
          <Botoes onClick={createTrip}>Criar viagem</Botoes>
          <BotaoSair>Sair</BotaoSair>
        </ContainerBotoes>
        <ContainerViagens>
          {listaViagens.map((viagem, index) => {
            return (
              <ContainerViagem key={index}>
                {viagem.name}
                <BotaoDeletar onClick={() => deletaViagem(viagem.id)}>
                  Excluir
                </BotaoDeletar>
              </ContainerViagem>
            );
          })}
        </ContainerViagens>
      </ContainerFilho>
    </ContainerPai>
  );
}

export default ViagensCadastradas;
