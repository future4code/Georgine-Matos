import styled from "styled-components";

const TelaMatchs = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 77%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 15px 1px #464646;
  h2{
      margin: 5px 15px
  }
`;

export default function Matchs() {
  return (
    <TelaMatchs>
      <h2>Tela de matchs</h2>
    </TelaMatchs>
  );
}