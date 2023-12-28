import styled, { css } from "styled-components";

const StyledCheckmark = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    margin-bottom: 10px;
    border-radius: 100%;
    background: #efefef;
    box-shadow: 5px 5px 10px #c5c5c5, -5px -5px 10px #ffffff;
    transition-duration: 0.5s;
    cursor: pointer;
    
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

   @media ${props => props.theme.media.tablet} {
        height: 25px;
        width: 25px;
        margin-top: 5px;
}
    @media ${props => props.theme.media.desktop} {
        height: 30px;
        width: 30px;
}
`

export default StyledCheckmark