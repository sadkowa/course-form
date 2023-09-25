import styled from "styled-components";

const StyledText = styled.p`
    margin: 30px auto;
    width:60%;
    font-size: 1.6rem;
    line-height: 4rem;
    text-align: center;

    @media ${props => props.theme.media.tablet} {
        font-size: 2.3rem;   
        line-height: 5rem;

    }
    @media ${props => props.theme.media.desktop} {
        font-size: 3rem;
        line-height: 6rem;
    }
`
export default StyledText