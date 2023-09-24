import styled, {css} from "styled-components";

const DefaultStyledButton = styled.button`
    position: absolute;
    top:50%;
    transform: translateY(-50%);

    ${({ theme }) => theme.primary}

    &:hover {
        background-color: #e6e6e6
    }
    &:active {
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.mobile} {
        padding: 8px 8px;
        font-size: 1.3rem;
}
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