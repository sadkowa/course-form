import styled from "styled-components";

const StyledHeading = styled.h1`
    text-align: center;
    @media ${props => props.theme.media.mobile} {
        width:50%;
        font-size: 2rem;
}
`

export default StyledHeading