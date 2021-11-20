import styled from "styled-components";

const ButtonEstilizado = styled.button`
  width: ${(props) => props.width};
  padding: 10px;
  background: #009d00;
  border: none;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.85);
  cursor: pointer;
  font-weight: bold;
`;

const BotaoEnviar = (props) => {
  return <ButtonEstilizado width={props.width} onClick={props.Clique}>Enviar</ButtonEstilizado>;
};

export default BotaoEnviar;
