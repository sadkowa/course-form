import styled from "styled-components";

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    min-height: 400px;
    padding: 20px 0;
    border-radius: ${props => props.theme.primary.borderRadius};
    background-color: ${props => props.theme.primary.backgroundColor};
    box-shadow:  5px 5px 5px #aeaeae,
                 -5px -5px 5px #eeeeee;
    @media ${props => props.theme.media.mobile} {
        margin: 20px auto;
    }             
`

export default StyledCard