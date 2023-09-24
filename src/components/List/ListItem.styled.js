import styled from "styled-components";

const StyledListItem = styled.li`
    cursor: pointer;
    ${({ theme }) => theme.primary}
    &:hover {
        background-color: #e6e6e6
    }
    &:active {
        ${({ theme }) => theme.pressed}
    };
    @media ${props => props.theme.media.mobile} {
        width: 100%;
        padding: 2px;  
        margin: 0 auto 15px; 
        font-size: 1.3rem;
    }
`

export default StyledListItem