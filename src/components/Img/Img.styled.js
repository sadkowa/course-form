import styled from "styled-components";
import flag from './../../images/flag.png'

const StyledImg = styled.img.attrs({ src: `${flag}` })`
    position: absolute;
    z-index: -1;
    @media ${props => props.theme.media.mobile} {
        top: 20px;
        right: 20px;
        width: 70px;
}
`

export default StyledImg