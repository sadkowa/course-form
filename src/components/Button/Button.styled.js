import styled from "styled-components";

const DefaultStyledButton = styled.button`
    padding: 8px 50px;
    /* margin: ${({ theme }) => theme.primary.margin};
    border: ${({ theme }) => theme.primary.border};
    border-radius: ${({ theme }) => theme.primary.borderRadius};
    background-color: ${({ theme }) => theme.primary.backgroundColor};;
    font-size: ${({ theme }) => theme.primary.fontSize};
    color: ${({ theme }) => theme.primary.color};
    box-shadow: ${({ theme }) => theme.primary.boxShadow}; */
    
    ${({ theme }) => theme.primary}
    &:hover {
        background-color: #e6e6e6
    }
    &:active {
        ${({ theme }) => theme.pressed}
    }
`

const StyledButton = styled(DefaultStyledButton)``

export default StyledButton