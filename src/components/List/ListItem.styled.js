import styled from "styled-components";

const StyledListItem = styled.li`
    margin-top: 10px;
    cursor: pointer;
    ${({ theme }) => theme.primary}
    &:hover {
        background-color: #e6e6e6
    }
    &:active {
        ${({ theme }) => theme.pressed}
    };
`

export default StyledListItem