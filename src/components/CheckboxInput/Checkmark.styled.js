import styled, { css } from "styled-components";

const DefaultStyledCheckmark = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: #e8e8e8;
    box-shadow: 3px 3px 5px #c5c5c5, -3px -3px 5px #ffffff;
    transition-duration: 0.5s;
    
    &:after {
        content: "";
        position: absolute;
        opacity: 0;
    }
   ${({ checked }) => checked && css`
        box-shadow: inset 3px 3px 5px #c5c5c5, inset -3px -3px 5px #ffffff;
        &:after {
            opacity: 1;
        }
   `}

   &&:after {
        left: 40%;
        top: 20%;
        width: 5px;
        height: 11px;
        border: solid #454545;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
   }
`

const StyledCheckmark = styled(DefaultStyledCheckmark)``

export default StyledCheckmark