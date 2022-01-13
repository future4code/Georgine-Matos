import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";

export const ImgVoltar = styled(ArrowBackIcon)` //o styled recebe como parametro a img do MUI 
  cursor: pointer;
  color: gray;
  &:hover {
    transition: ease-in-out 0.2s;
    color: #575757;
    transform: scale(1.3);
  }
`;

export default function ImgBack(props) {
  return (
    <ImgVoltar sx={{ width: 40, height: 40 }} onClick={()=>props.mudaTela('Perfil')}/>
  );
}

