import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Base_URL } from "./utils/constants";
import { pegaPaisesAPI, pegaViagens } from "../services/RequestApi";
import { useForm } from "../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";

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

const BotaoLimpar = styled.button`
  cursor: pointer;
  border: none;
  height: 50px;
  font-size: 20px;
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
  font-size: 20px;
  border: none;
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
  font-size: 16px;
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

function ApplicationFormPage() {
  const [listaViagens, setListaViagens] = useState([{}]);
  const [paises, setPaises] = useState([]);
  const [viagemEscolhida, setViagemEscolhida] = useState("");
  const history = useHistory();
  const { form, onChange, limpaCampos } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
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

  useEffect(() => pegarPaises(), []);

  const pegarPaises = async () => {
    const response = await pegaPaisesAPI();
    response && setPaises(response);
  };

  const pegaSelectNomeDoPais = (e) => {
    setViagemEscolhida(e.target.value);
  };

  const enviarInscricao = (id) => {
    axios
      .post(`${Base_URL}/trips/${id}/apply`, {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country,
      })
      .then(() => {
        limpaCampos()
        acionaToastify()
      })
      .catch((error) => console.log(error));
  };

  const acionaToastify = () => {
    toast.success("Inscrição efetuada com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  return (
    <ContainerPai>
      <Titulo>Inscrição para Viagem</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
        </ContainerBotoes>
        <Form>
          <Select
            placeholder="Selecione o destino"
            onChange={pegaSelectNomeDoPais}
            type={"select"}
            name={"destino"}
            required
          >
            <Option value={""}>Selecione o destino</Option>
            {listaViagens.map((viagem, index) => {
              return (
                <Option value={viagem.id} key={index} name={"id"}>
                  {viagem.name}
                </Option>
              );
            })}
          </Select>
          <Input
            placeholder="Nome"
            type={"text"}
            name={"name"}
            required
            value={form.name}
            onChange={onChange}
          />
          <Input
            placeholder="Idade"
            type={"number"}
            name={"age"}
            required
            value={form.age}
            onChange={onChange}
          />
          <Input
            placeholder="Texto de candidatura"
            type={"text"}
            name={"applicationText"}
            required
            value={form.applicationText}
            onChange={onChange}
          />
          <Input
            placeholder="Profissão"
            type={"text"}
            name={"profession"}
            required
            value={form.profession}
            onChange={onChange}
          />
          <Select
            placeholder="Selecione um país"
            type={"select"}
            onChange={onChange}
            name={"country"}
            required
            value={form.country}
          >
            <Option value={""}>Selecione o país</Option>
            {paises.map((pais, index) => {
              return (
                <Option value={pais.nome.abreviado} key={index}>
                  {pais.nome.abreviado}
                </Option>
              );
            })}
          </Select>
          <BotoesRodape>
            <BotaoLimpar onClick={limpaCampos}>Limpar</BotaoLimpar>
            <BotaoEnviar
              type="button"
              onClick={() => enviarInscricao(viagemEscolhida)}
            >
              Enviar
            </BotaoEnviar>
          </BotoesRodape>
        </Form>
      </ContainerFilho>
      <ToastContainer autoClose={2000} />
    </ContainerPai>
  );
}

export default ApplicationFormPage;
