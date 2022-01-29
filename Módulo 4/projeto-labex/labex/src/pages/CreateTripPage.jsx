import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";
import { pegaViagens } from "../services/RequestApi";
import axios from "axios";
import { Base_URL } from "./utils/constants";
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

const BotaoLimpar = styled.button`
  cursor: pointer;
  border: none;
  height: 60px;
  font-size: 20px;
  height: 50px;
  width: 140px;
  padding: 5px;
  border-radius: 10px;
  background: #ffc107;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  margin: 20px 0;
  :hover {
    background: #b18500;
    transition: all 0.4s ease-out;
  }
`;

const BotaoEnviar = styled.button`
  cursor: pointer;
  border: none;
  font-size: 20px;
  height: 50px;
  width: 140px;
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

const Form = styled.form`
  padding: 15px;
  border-radius: 10px;
  width: 80%;
  color: #006585;
  box-shadow: 1px 1px 20px 4px #888888;
`;

const Input = styled.input`
  color: #006585;
  font-size: 16px;
  width: 98%;
  border: 1px solid #006585;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  font-size: 16px;
  color: #006585;
  width: 100.09%;
  border: 1px solid #006585;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 10px;
`;

const BotoesRodape = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Option = styled.option`
  font-size: 16px;
`;

function CreateTripPage() {
  useProtectedPage()
  const token = localStorage.getItem("token");
  const [listaViagens, setListaViagens] = useState([]);
  const history = useHistory();
  const { form, onChange, limpaCampos } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    mostrarViagens();
  }, []);

  const mostrarViagens = async () => {
    const response = await pegaViagens();
    response?.trips && setListaViagens(response.trips);
  };

  const acionaToastify = () => {
    toast.success("Viagem criada com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  const criarViagem = () => {
    axios
      .post(
        `${Base_URL}/trips`,
        {
          name: form.name,
          planet: form.planet,
          date: form.date,
          description: form.description,
          durationInDays: form.durationInDays,
        },
        {
          headers: {
            auth: token,
          },
        }
      )
      .then(() => {
        limpaCampos();
        acionaToastify()
      })
      .catch((error) => console.log(error));
  };

  return (
    <ContainerPai>
      <Titulo>Criar uma Viagem</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
        </ContainerBotoes>
        <Form>
          <Input
            placeholder="Nome"
            type={"text"}
            name={"name"}
            required
            value={form.name}
            onChange={onChange}
          />
          <Select
            placeholder="Escolha um planeta"
            onChange={onChange}
            type={"select"}
            name={"planet"}
            required
          >
            <Option value={""}>Escolha um planeta</Option>
            {listaViagens.map((viagem, index) => {
              return (
                <Option value={viagem.planet} key={index} name={"id"}>
                  {viagem.planet}
                </Option>
              );
            })}
          </Select>
          <Input
            type={"date"}
            required
            value={form.date}
            onChange={onChange}
            name={"date"}
          />
          <Input
            placeholder="Descrição"
            type={"text"}
            required
            value={form.description}
            onChange={onChange}
            name={"description"}
          />
          <Input
            placeholder="Duração em dias"
            type="number"
            required
            value={form.durationInDays}
            onChange={onChange}
            name={"durationInDays"}
          />
          <BotoesRodape>
            <BotaoLimpar onClick={limpaCampos}>Limpar</BotaoLimpar>
            <BotaoEnviar type="button" onClick={criarViagem}>
              Criar
            </BotaoEnviar>
          </BotoesRodape>
        </Form>
      </ContainerFilho>
      <ToastContainer autoClose={2000} />
    </ContainerPai>
  );
}

export default CreateTripPage;
