import styled, { css } from "styled-components";

const DefaultStyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 60%;
    margin: 10px auto;
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