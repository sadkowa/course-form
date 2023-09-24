import styled from "styled-components";

const StyledDropdown = styled.button`
    ${({ theme }) => theme.primary}
  
    &:hover {
        background-color: #e6e6e6    
    }

    &:active {
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.mobile} {
        width: 60%;
        padding: 3px;  
        margin: 20px auto 10px; 
        font-size: 1.3rem;
    }    
`

export default StyledDropdown