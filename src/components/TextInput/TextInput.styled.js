import styled from "styled-components";

const DefaultStyledTextInput = styled.input`
    padding: 10px 50px;
    margin-top: 10px;
    width: 100%;
    
    ${({ theme }) => theme.primary}
  
    &:focus {
        outline: none;
        ${({ theme }) => theme.pressed}
    }
    &:checked {
        color:red
    }
`

const StyledTextInput = styled(DefaultStyledTextInput)``

export default StyledTextInput