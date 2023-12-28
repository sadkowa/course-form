import styled, {css} from "styled-components";

const DefaultStyledButton = styled.button`
    position: absolute;
    top:50%;
    padding: 8px 8px;
    font-size: 1.3rem;
    transform: translateY(-50%);

    ${({ theme }) => theme.primary}

    &:hover {
        ${({ theme }) => theme.hover}
    }
    &:active {
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.tablet} {
        padding: 10px 15px;
        font-size: 1.3rem;
    }
    @media ${props => props.theme.media.desktop} {
            padding: 15px 20px;
            font-size: 2rem
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