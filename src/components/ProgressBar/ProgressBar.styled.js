import styled from "styled-components";

const StyledProgressBar = styled.progress`
    
    background-color: white;
    width: 100%;
    margin-top: 70px;

    &[value]::-webkit-progress-bar {

        background-color: #eee;
        border-radius: 20px;
        box-shadow: ${props=> props.theme.primary.boxShadow}
    }

    &[value]::-webkit-progress-value {
      background-image: linear-gradient(to right, #0f43ff, #1dd3d6);
        border-radius: 20px;
    }

`

export default StyledProgressBar