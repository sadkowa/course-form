import { createGlobalStyle } from 'styled-components';
import robotoWoff from './../../fonts/roboto.woff';
import robotoWoff2 from './../../fonts/roboto.woff2';

import photo from './../../images/buildings-69971_1280.jpg'


const GlobalStyle = createGlobalStyle`
 @font-face {
        font-family: 'Roboto';
        src: url(${robotoWoff2}) format('woff2'),
             url(${robotoWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    html {
        font-size: 10px;
    }

    body {
        font-family: Roboto, Verdana, Tahoma, sans-serif;
        font-size: 1.6rem;
        background-image: url(${photo});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain
    }
`;

export default GlobalStyle;
