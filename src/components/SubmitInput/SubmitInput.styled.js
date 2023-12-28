import styled from "styled-components";

const StyledSubmitInput = styled.input`
    ${({ theme }) => theme.primary}
    width: 60%;
    margin: 40px auto; 
    padding: 8px; 
    font-size: 1.4rem; 
    text-transform: uppercase;
    letter-spacing: 2px;

    &:hover {
        ${({ theme }) => theme.hover}
    }
    &:active {
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.tablet} {
        padding: 10px; 
        font-size: 1.7rem; 
    }
    @media ${props => props.theme.media.desktop} {
        padding: 12px; 
        margin-top: 50px;
        font-size: 1.9rem; 
    }
`

export default StyledSubmitInput