import styled from "styled-components";

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px auto;
    max-width: 600px;
    min-height: 450px;
    padding: 20px 0;
    border-radius: ${props => props.theme.primary.borderRadius};
    background-color: ${props => props.theme.primary.backgroundColor};
    box-shadow:  5px 5px 5px #aeaeae,
                 -5px -5px 5px #fff;

    @media ${props => props.theme.media.tablet} {
        margin: 30px auto;
        min-height: 500px;
    }     
    @media ${props => props.theme.media.desktop} {
        min-height: 550px;
    }           
`

export default StyledCard