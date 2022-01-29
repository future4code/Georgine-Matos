import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Labex = styled.div`
  color: #006585;
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 60px;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  width: 400px;
  height: 250px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
  margin: 10% auto;
`;

const ContainerFilho = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
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
  :hover {
    background: #006585;
    transition: all 0.4s ease-out;
  }
`;

const ContainerBotoes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
`;

function HomePage() {
  const history = useHistory()

  const goToListtripsPage = () =>{
    history.push("/trips/list")
  }

  const goToAdminHomePage = () =>{
    history.push("/admin/trips/list")
  }
  return (
    <Container>
      <ContainerFilho>
        <Labex>LabeX</Labex>
        <ContainerBotoes>
          <Botoes onClick={goToListtripsPage}>Ver viagens</Botoes>
          <Botoes onClick={goToAdminHomePage}>Admin</Botoes>
        </ContainerBotoes>
      </ContainerFilho>
    </Container>
  );
}

export default HomePage;
