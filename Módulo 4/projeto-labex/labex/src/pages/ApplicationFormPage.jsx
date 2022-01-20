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
  margin: 5% auto;
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
  height: 60px;
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
`

function ApplicationFormPage() {
  const history = useHistory()

  const goBack = () => {
    history.goBack();
  };

  return (
    <ContainerPai>
      <Titulo>Inscrição para Viagem</Titulo>
      <ContainerFilho>
        <ContainerBotoes>
          <Botoes onClick={goBack}>Voltar</Botoes>
        </ContainerBotoes>
        <Form>
          <Select placeholder="Selecione o destino">
            <Option>Selecione o destino</Option>
            <Option>Destino</Option>
          </Select>
          <Input placeholder="Nome" />
          <Input placeholder="Idade" type="number" />
          <Input placeholder="Texto de candidatura" type="text" />
          <Input placeholder="Profissão" type="text" />
          <Input placeholder="Escolha uma viagem" />
          <Select placeholder="Selecione um país">
            <Option>Selecione o país</Option>
          </Select>
          <BotoesRodape>
            <BotaoLimpar>Limpar</BotaoLimpar>
            <BotaoEnviar>Enviar</BotaoEnviar>
          </BotoesRodape>
        </Form>
      </ContainerFilho>
    </ContainerPai>
  );
}

export default ApplicationFormPage;
