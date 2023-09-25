import styled from "styled-components";

const DefaultStyledTextInput = styled.input`
    ${({ theme }) => theme.primary}
    width: 100%;
    padding: 2px 10px;  
    margin-top: 10px;
    font-size: 1.3rem;
    
    &:focus {
        outline: none;
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.tablet} {
        padding: 3px 10px;  
        font-size: 1.5rem;
    }
    @media ${props => props.theme.media.desktop} {
        padding: 4px 10px;  
        margin-top: 15px;
        font-size: 1.7rem;
    }
   
`

const StyledTextInput = styled(DefaultStyledTextInput)``

export default StyledTextInput