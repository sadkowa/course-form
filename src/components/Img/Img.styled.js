import styled, {css} from "styled-components";

const StyledImg = styled.img`
    width: 40px;
    margin: 5px;

    ${({ reversed }) => reversed && css`transform: scale(-1, 1)` };

    @media ${props => props.theme.media.tablet} {
        width: 60px;
} 
    @media ${props => props.theme.media.desktop} {
        width: 70px;
}
`

export default StyledImg