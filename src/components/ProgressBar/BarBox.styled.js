import styled from "styled-components"

const StyledBarBox = styled.div`
    width: 80%;
    position: absolute;
    height:15px;
    border-radius: 20px;
    bottom: 30px;
    background-color: #eee;
    box-shadow: ${props => props.theme.primary.boxShadow}
`

export default StyledBarBox
