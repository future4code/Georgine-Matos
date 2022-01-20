import styled from "styled-components";
import ClearIcon from '@mui/icons-material/Clear';

const Nao = styled(ClearIcon)`
cursor: pointer;
color: red;
&:hover {
  transition: ease-in-out 0.2s;
  transform: scale(1.3);
}
`
export default function BotaoNao() {
return (
  <Nao sx={{ width: 60, height: 60 }}></Nao>
);
}