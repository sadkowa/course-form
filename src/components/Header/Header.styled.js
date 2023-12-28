import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    min-height: 60px ; 
    margin: 0 auto;
    padding-top: 30px; 

    @media ${props => props.theme.media.desktop} {
        width: 80%;
        padding-top: 30px        
}
`

export default StyledHeader