import styled from "styled-components";
import CheckIcon from '@mui/icons-material/Check';

const Sim = styled(CheckIcon)`
cursor: pointer;
color: green;
&:hover {
  transition: ease-in-out 0.2s;
  transform: scale(1.3);
}
`
export default function BotaoSim() {
return (
  <Sim sx={{ width: 60, height: 60 }}></Sim>
);
}