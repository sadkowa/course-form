import styled from "styled-components";

const DefaultStyledInput = styled.input`
    padding: 8px 50px;
    
    ${({ theme }) => theme.primary}
    &:hover {
        background-color: #e6e6e6
    }
    &:active {
        ${({ theme }) => theme.pressed}
    }
`

const StyledInput = styled(DefaultStyledInput)``

export default StyledInput