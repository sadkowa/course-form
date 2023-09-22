import { css } from "styled-components"

const themeSettings = {
    primary: {
        margin: '20px',
        border: 'none',
        backgroundColor: `#f2f2f2`,
        boxShadow: `5px 5px 9px #aeaeae,
                    -5px -5px 9px #ffffff`,
        borderRadius: '30px',
        color: '#828282',
        fontSize: '2rem',
        letterSpacing: ' 1px',
        transition: '0.5s ease',
        cursor: 'pointer',
    }
    ,
    pressed: {
        boxShadow: `inset 5px 5px 10px #aeaeae,
            inset -5px -5px 10px #ffffff`,
    }
}


export default themeSettings