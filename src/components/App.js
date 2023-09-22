import React from 'react';

import ResetStyle from './global/Reset';
import GlobalStyle from './global/Global';

import themeSettings from './global/theme';
import { ThemeProvider } from 'styled-components';

import { Button } from './Button';
import { Label } from './Label';
import { TextInput } from './TextInput';
import SubmitInput from './SubmitInput/SubmitInput';

const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <ThemeProvider theme={themeSettings}>
            <Button>{'>'}</Button>
            <Button>{'<'}</Button>
            <Label label='firstName'>First name
                <TextInput name='firstName' />
            </Label>
            <Label label='Second name'>
                <TextInput name='secondName' />
            </Label>
            <Label label='Email'>
                <TextInput name='email' />
            </Label>
            <Label>
                <SubmitInput value='Submit' />
            </Label>
            {/* <Input type='submit'/>
            <Input type='radio'/>
            <Input type='checkbox'/> */}
        </ThemeProvider>

    </>
);

export default App;