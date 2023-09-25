import styled from "styled-components";
// import flag from './../../images/flag.png'

// const StyledImg = styled.img.attrs({ src: `${flag}` })`
// Nie muszę dodawać atrybutów jak wyżej? Wystarczy wpisać atrybuty jako propsy w pliku Img.js?

const StyledImg = styled.img`
    position: absolute;
    top: 30px;
    right: 10px;
    width: 70px;
    z-index: -1;

    @media ${props => props.theme.media.tablet} {
        width: 150px;
} 
    @media ${props => props.theme.media.desktop} {
        top: 30px;
        right: 0;
        width: 200px;
}
`

export default StyledImg