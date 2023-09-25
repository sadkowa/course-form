import styled from "styled-components";

const DefaultStyledSubmitInput = styled.input`
    ${({ theme }) => theme.primary}
    text-transform: uppercase;
    &:hover {
        background-color: #e6e6e6    
    }

    &:active {
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.mobile} {
        width: 60%;
        margin: 40px auto; 
        padding: 10px; 
        font-size: 1.4rem; 
    }
`

const StyledSubmitInput = styled(DefaultStyledSubmitInput)``

export default StyledSubmitInput