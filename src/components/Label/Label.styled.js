import styled, { css } from "styled-components";

const DefaultStyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${props => props.theme.media.mobile} {
        width: 60%;
        margin: 10px auto;
        font-size: 1.3rem;
    }
`

const StyledLabel = styled(DefaultStyledLabel)`
    ${props => props.name === "Checkbox" && css`
        position: relative;
        cursor: pointer;
        /* user-select: none; */
    `}
    `

export default StyledLabel