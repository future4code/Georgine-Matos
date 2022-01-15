import React from "react";
import styled from "styled-components";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export const ContainerPai = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 500px;
  height: 90vh;
  padding: 15px;
  border-radius: 10px;
  background: white;
  box-shadow: 4px 4px 15px 1px #464646;
`;

export const ContainerHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerFooter = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AstroMatch = styled.div`
  display: flex;
`;

export const Astro = styled.p`
  font-size: 2rem;
  color: #4a8fa7;
  font-weight: bold;
`;

export const Match = styled.p`
  font-size: 2rem;
  color: #cf6d8c;
  font-weight: bold;
`;

export const Hr = styled.div`
  margin-top: 15px;
  border-top: 2px solid gray;
  opacity: .5;
`

const VerMatchs = styled(GroupAddIcon)` //o styled recebe como parametro a img do MUI 
  cursor: pointer;
  color: gray;
  &:hover {
    transition: ease-in-out 0.2s;
    color: #575757;
    transform: scale(1.3);
  }
`;

export default function Combinacao(props) {
  return (
    <VerMatchs sx={{ width: 40, height: 40 }} onClick={()=>props.mudaTela('Matchs')}/>
  );
}