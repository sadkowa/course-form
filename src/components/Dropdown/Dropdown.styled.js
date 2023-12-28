import styled from "styled-components";

const StyledDropdown = styled.button`
    ${({ theme }) => theme.primary}
    position: relative;
    width: 60%;
    padding: 3px;  
    margin: 20px auto 10px; 
    font-size: 1.3rem;
  
    &:hover {
        ${({ theme }) => theme.hover}
    }

    &:active {
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.tablet} {
        padding: 5px;  
        font-size: 1.5rem;
    }  
    @media ${props => props.theme.media.desktop} {
        font-size: 1.7rem;
    }    
`

export default StyledDropdown