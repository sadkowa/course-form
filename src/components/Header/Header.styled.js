import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.media.mobile} {
        height: 120px ;
    }
`

export default StyledHeader