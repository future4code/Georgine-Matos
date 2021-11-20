import React from "react";
import styled from "styled-components";

const InputEstilizado = styled.input`
 width: ${(props) => props.width};
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.85); 
  margin-right: 10px;
  `;

const Input = (props) => {
  return (
    <>
      <InputEstilizado placeholder={props.Placeholder} width={props.width} onChange={props.mudanca} value={props.value}>{props.nome}</InputEstilizado>
    </>
  );
};

export default Input;
