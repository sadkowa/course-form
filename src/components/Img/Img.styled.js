import styled from "styled-components";
import flag from './../../images/flag.png'

const StyledImg = styled.img.attrs({ src: `${flag}` })`
    position: absolute;
    top: 30px;
    right: 10px;
    width: 100px
`

export default StyledImg