import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Base_URL } from "./utils/constants";
import { useForm } from "./../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";

const Titulo = styled.div`
  color: #006585;
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  width: 600px;
  height: 300px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
  margin: 10% auto;
  padding-bottom: 20px; ;
`;

const ContainerFilho = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Form = styled.form`
  padding: 15px;
  border-radius: 10px;
  width: 80%;
  color: #006585;
  box-shadow: 1px 1px 20px 4px #888888;
`;

const Botoes = styled.button`
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 50px;
  width: 130px;
  padding: 5px;
  border-radius: 10px;
  background: #00a5da;
  color: white;
  box-shadow: 6px 7px 10px #888888;
  transition: all 0.4s ease-out;
  margin: 10px 0;
  :hover {
    background: #006585;
    transition: all 0.4s ease-out;
  }
`;

const ContainerBotoes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Input = styled.input`
  color: #006585;
  font-size: 16px;
  width: 95%;
  border: 1px solid #006585;
  border-radius: 10px;
  padding: 8px;
  margin: 10px 0;
`;

function LoginPage() {
  const history = useHistory();
  const { form, onChange, limpaCampos } = useForm({ email: "", password: "" });

  const goBack = () => {
    history.goBack();
  };

  const logaUser = (e) => {
    e.preventDefault();
    const id = toast.loading("Logando...");
    axios
      .post(`${Base_URL}/login`, {
        email: form.email,
        password: form.password,
      })
      .then(({ data }) => {
          localStorage.setItem("token", data.token);
          history.push("/admin/trips/list");
        toast.update(id, {
          render: "Tudo certo, vamos lá",
          type: "success",
          isLoading: false,
          autoClose:2000,
          theme:"colored"
        });
      })
      .catch(() => {
        toast.update(id, {
          render: "Ops, email ou senha incorreto",
          type: "error",
          isLoading: false,
          autoClose:2000,
          theme:"colored"
        })
      });
    limpaCampos();
  };

  return (
    <Container>
      <ContainerFilho>
        <Titulo>Login</Titulo>
        <ContainerBotoes></ContainerBotoes>
        <Form onSubmit={logaUser}>
          <Input
            placeholder="Email"
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
          <Input
            placeholder="Senha"
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            pattern={"[0-9]{6,6}"}
            title="Insira uma senha de 6 dígitos(números)"
          />
          <ContainerBotoes>
            <Botoes onClick={goBack}>Voltar</Botoes>
            <Botoes>Entrar</Botoes>
          </ContainerBotoes>
        </Form>
      </ContainerFilho>
      <ToastContainer/>
    </Container>
  );
}

export default LoginPage;
