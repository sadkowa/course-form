import styled, { keyframes } from "styled-components";

const loadAnimation = keyframes`
    0% { width: var(--width1) }
    100% {width: var(--width2)}
`

const StyledProgressBar = styled.div`
    --calcWidth: 100%;
    --width1: calc(var(--calcWidth) * ${props => props.ratio1});
    --width2: calc(var(--calcWidth) * ${props => props.ratio2});
    animation: linear ${loadAnimation} 0.3s ;
    position: absolute;
    left:0;
    height: 15px;
    width: var(--width2);
    border-radius: 20px;
    background-image: linear-gradient(to right, #0f43ff, #1dd3d6);
    `

export default StyledProgressBar

// const StyledProgressBar = styled.progress`
//     ${({value} ({value:0}))}
//     background-color: white;
//     width: 80%;
//     position: absolute;
//     bottom: 30px;

//     &[value]::-webkit-progress-bar {

//         background-color: #eee;
//         border-radius: 20px;
//         box-shadow: ${props=> props.theme.primary.boxShadow}
//     }

//     &[value]::-webkit-progress-value {
//       background-image: linear-gradient(to right, #0f43ff, #1dd3d6);
//         border-radius: 20px;
//     }


// `

