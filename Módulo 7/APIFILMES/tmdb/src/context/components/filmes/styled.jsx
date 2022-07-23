import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  width: 12rem;
  transition: 300ms ease-in-out;

  &:hover {
    transition: 300ms ease-in-out;
    transform: scale(1.05);
  }
`;

export const AllCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
