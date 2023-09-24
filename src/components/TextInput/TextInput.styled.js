import styled from "styled-components";

const DefaultStyledTextInput = styled.input`
    ${({ theme }) => theme.primary}
  
    &:focus {
        outline: none;
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.mobile} {
        width: 100%;
        padding: 2px 10px;  
        margin-top: 10px;
        font-size: 1.3rem;
    }
   
`

const StyledTextInput = styled(DefaultStyledTextInput)``

export default StyledTextInput