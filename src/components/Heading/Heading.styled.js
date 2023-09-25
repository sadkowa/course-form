import styled from "styled-components";

const StyledHeading = styled.h1`
    text-align: center;
    width: 60%;
    font-size: 2.2rem;

    @media ${props => props.theme.media.tablet} {
        font-size: 3rem;
}
    @media ${props => props.theme.media.desktop} {
        font-size: 3.6rem;
}
`

export default StyledHeading