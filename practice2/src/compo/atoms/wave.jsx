import React from "react";
import styled, {keyframes} from "styled-components";

const Wave = ({...props}) => (<StyledDiv {...props}></StyledDiv>)

const moveVertically = keyframes`
  0% {
    background-position: 0; 
  }
  100% {
    background-position: 1280px;
  }
`;

Wave.defaultProps = {
  opacity: "0.5",
  height: "150px",
}

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => props.height};
  bottom: 0;
  left: 0;
  background: url('/wave.png');
  opacity: ${(props) => props.opacity};
  animation: ${moveVertically} ${(props) => props.frequency}s linear infinite;
`

export default Wave