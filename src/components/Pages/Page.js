import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
    height: 100vh
`

const Page = ({ children }) => {
    return (
            <StyledPage>{children}</StyledPage>

    )
}

export default Page