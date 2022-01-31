import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { deletaViagem, pegaViagens } from "../services/RequestApi";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";
import { useProtectedPage } from "../services/ProtectPage";

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
  font-size: 20px;
  border: none;
  height: 50px;
  width: 140px;
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
  font-size: 20px;
  border: none;
  height: 50px;
  width: 140px;
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
  font-size: 16px;
  border: none;
  height: 45px;
  width: 80px;
  padding: 5px 8px;
  border-radius: 10px;
  background: #dc3545;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  right: 10px;
  :hover {
    background: #a01c28;
    transition: all 0.4s ease-out;
  }
`;

const ContainerViagem = styled.div`
  width: 85%;
  height: 20px;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  color: #006585;
  box-shadow: 1px 1px 20px 4px #888888;
  margin-bottom: 20px;
  transition: all 0.4s ease-out;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 20px 4px #272727;
    transition: all 0.4s ease-out;
  }
`;

const ContainerViagens = styled.div`
  width: 80%;
`;

const Spinner = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ViagensCadastradas() {
  useProtectedPage();
  const [listaViagens, setListaViagens] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const goBack = () => {
    history.goBack();
  };

  const createTrip = () => {
    history.push("/admin/trips/create");
  };

  useEffect(() => {
    mostrarViagens();
  }, []);

  const mostrarViagens = async () => {
    const response = await pegaViagens();
    response?.trips && setListaViagens(response.trips);
    setLoading(false);
  };

  const removerViagem = async (idViagem) => {
    await deletaViagem(idViagem).then(() => acionaToastify());
    mostrarViagens();
  };

  const acionaToastify = () => {
    toast.success("Viagem excluída com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  const removeUsuario = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const capturaIdViagem = (idViagem) => {
    history.push(`/admin/trips/${idViagem}`);
  };

  return (
    <ContainerPai>
      <Titulo>Painel Administrativo</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
          <Botoes onClick={createTrip}>Criar viagem</Botoes>
          <BotaoSair onClick={removeUsuario}>Sair</BotaoSair>
        </ContainerBotoes>
        <ContainerViagens>
          {loading ? (
            <Spinner>
              <BeatLoader color="#00a5da" />
            </Spinner>
          ) : (
            listaViagens?.map((viagem, index) => {
              return (
                <div key={index} className="containerViagem">
                  <ContainerViagem
                    key={index}
                    onClick={() => capturaIdViagem(viagem.id)}
                  >
                    {viagem.name}
                  </ContainerViagem>
                  <BotaoDeletar onClick={() => removerViagem(viagem.id)}>
                    Excluir
                  </BotaoDeletar>
                </div>
              );
            })
          )}
        </ContainerViagens>
      </ContainerFilho>
      <ToastContainer autoClose={2000} />
    </ContainerPai>
  );
}

export default ViagensCadastradas;
