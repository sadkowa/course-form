import styled, { css } from "styled-components";

const DefaultStyledLabel = styled.label`
    display: flex;

    ${({ name }) => name && css`
        flex-direction: row;
        justify-content: space-between;
        margin: 5px 30px
    `};

    ${({ name }) => !name && css`
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 60%;
        margin: 5px auto;
    `};
    font-size: 1.3rem;

    @media ${props => props.theme.media.tablet} {
        font-size: 1.6rem;
    }
    @media ${props => props.theme.media.desktop} {
        font-size: 1.8rem;
    }
`

const StyledLabel = styled(DefaultStyledLabel)`
    ${props => props.name === "Checkbox" && css`
        position: relative;
        cursor: pointer;
    `}
    `

export default StyledLabel