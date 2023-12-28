import styled from "styled-components";

const StyledText = styled.p`
    margin: 30px auto;
    width: 70%;
    font-size: 1.3rem;
    line-height: 3rem;
    text-align: center;

    @media ${props => props.theme.media.tablet} {
        font-size: 1.6rem;   
        line-height: 4rem;

    }
    @media ${props => props.theme.media.desktop} {
        font-size: 1.8rem;
        line-height: 5rem;
    }
`
export default StyledText