import styled from "styled-components";

const StyledHeading = styled.h1`
    text-align: center;
    vertical-align: center;
    font-size: 1.8rem;

    @media ${props => props.theme.media.tablet} {
        font-size: 2.5rem;
}
    @media ${props => props.theme.media.desktop} {
        font-size: 2.8rem;
}
`

export default StyledHeading