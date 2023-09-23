import styled, {css} from "styled-components";

const DefaultStyledButton = styled.button`
    position: absolute;
    padding: 10px 20px;
    margin-bottom:30px;
    border-radius: 50%;
    bottom:10%;
    transform: translateY(-50%);

    ${({ theme }) => theme.primary}

    &:hover {
        background-color: #e6e6e6
    }
    &:active {
        ${({ theme }) => theme.pressed}
    };
    font-size: 20px;
`

const StyledButton = styled(DefaultStyledButton)`
${({variant}) => variant==='left' && css`
    left: 4%
`}
${({variant}) => variant==='right' && css`
    right:4%
`}
`

export default StyledButton