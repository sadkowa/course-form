import styled from "styled-components";

const DefaultStyledSubmitInput = styled.input`
    padding: 10px 50px;
    
    ${({ theme }) => theme.primary}
  
    &:hover {

        background-color: #e6e6e6
    
        ${({ theme }) => theme.pressed}
    }
`

const StyledSubmitInput = styled(DefaultStyledSubmitInput)``

export default StyledSubmitInput