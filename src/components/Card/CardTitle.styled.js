import styled from "styled-components";

const StyledCardTitle = styled.h3`
    width: 80%;
    margin: 0 auto 15px;
    font-size: 2rem;
    text-align: center;

    @media ${props => props.theme.media.tablet} {
        margin: 0 auto 20px;
        font-size: 2.3rem;
}
    @media ${props => props.theme.media.desktop} {
        font-size: 2.8rem;
}
`

export default StyledCardTitle