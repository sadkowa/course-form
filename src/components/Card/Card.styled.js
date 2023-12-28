import styled from "styled-components";

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px auto;
    max-width: 600px;
    min-height: ${({option})=> option==='summary' ? '100px' : '450px'};
    padding: 20px 0;
    border-radius: ${props => props.theme.primary.borderRadius};
    background-color: ${props => props.theme.primary.backgroundColor};
    box-shadow:  5px 5px 5px #aeaeae,
                 -5px -5px 5px #fff;

    @media ${props => props.theme.media.tablet} {
        margin-top: 30px;
        min-height: ${({option})=> option==='summary' ? '100px' : '500px'}
    }     
    @media ${props => props.theme.media.desktop} {
        min-height: ${({option})=> option==='summary' ? '100px' : '550px'};
        margin-top: 40px;
    }           
`

export default StyledCard