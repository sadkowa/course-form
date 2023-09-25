const themeSettings = {
    primary: {
        border: 'none',
        backgroundColor: `#f2f2f2`,
        boxShadow: `5px 5px 5px #aeaeae,
                    -5px -5px 5px #ffffff`,
        borderRadius: '30px',
        color: '#454545',
        transition: '0.5s ease',
        cursor: 'pointer',
    }
    ,
    pressed: {
        boxShadow: `inset 5px 5px 5px #aeaeae,
            inset -5px -5px 5px #ffffff`,
    },

    media: {
        // mobile: 'screen and (max-width: 599px)',
        tablet: 'screen and (min-width: 600px)',
        desktop: 'screen and (min-width: 1200px)',
        }
}


export default themeSettings