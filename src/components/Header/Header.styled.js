import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px ; 
    
    @media ${props => props.theme.media.tablet} {
        width: 90%;
        margin: 0 auto;
}
    @media ${props => props.theme.media.desktop} {
        width: 80%;
        margin: 0 auto;
}
`

export default StyledHeader