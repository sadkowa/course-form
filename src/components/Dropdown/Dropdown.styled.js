import styled from "styled-components";

const StyledDropdown = styled.button`
    padding: 0 50px;  
    ${({ theme }) => theme.primary}
  
    &:hover {
        background-color: #e6e6e6    
    }

    &:active {
        ${({ theme }) => theme.pressed}
    };
    margin: 40px auto 10px; 
`

export default StyledDropdown