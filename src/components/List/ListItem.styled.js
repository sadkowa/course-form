import styled from "styled-components";

const StyledListItem = styled.li`
    cursor: pointer;
    width: 100%;
    padding: 2px;  
    margin: 0 auto 15px; 
    font-size: 1.3rem;

    ${({ theme }) => theme.primary}
    
    &:hover {
        background-color: #e6e6e6
    }
    &:active {
        ${({ theme }) => theme.pressed}
    };

    @media ${props => props.theme.media.tablet} {
        padding: 5px;  
        font-size: 1.5rem;
    }  
    @media ${props => props.theme.media.desktop} {
        font-size: 1.7rem;
    }  
`

export default StyledListItem