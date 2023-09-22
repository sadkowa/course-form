import React from 'react';

import ResetStyle from './global/Reset';
import GlobalStyle from './global/Global';

import themeSettings from './global/theme';
import { ThemeProvider } from 'styled-components';

import { Button } from './Button';
import { Input } from './Input';

const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <ThemeProvider theme={themeSettings}>
            <Button>Send</Button>
            <Input>Send</Input>
        </ThemeProvider>
    </>
);

export default App;