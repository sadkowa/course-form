import styled from "styled-components";

const DefaultStyledTextInput = styled.input`
    padding: 5px 50px;
    margin-top: 10px;
    width: 100%;
    
    ${({ theme }) => theme.primary}
  
    &:focus {
        outline: none;
        ${({ theme }) => theme.pressed}
    }
   
`

const StyledTextInput = styled(DefaultStyledTextInput)``

export default StyledTextInput