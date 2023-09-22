import React from 'react';

import ResetStyle from './global/Reset';
import GlobalStyle from './global/Global';

import themeSettings from './global/theme';
import { ThemeProvider } from 'styled-components';

import { Button } from './Button';
import { Label } from './Label';
import { TextInput } from './TextInput';
import { SubmitInput } from './SubmitInput';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';

const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <ThemeProvider theme={themeSettings}>
            <Button>{'>'}</Button>
            <Button>{'<'}</Button>
            <Card>
                <Label label='firstName'>First Name
                    <TextInput name='firstName' />
                </Label>
                <Label label='lastName'>Last Name
                    <TextInput name='lastName' />
                </Label>
                <Label label='email'>Email
                    <TextInput name='email' />
                </Label>
                <Label>
                    <SubmitInput value='Submit' />
                </Label>
            </Card>
            <Label>
                <ProgressBar value="33" max="100" />
            </Label>
            {/* <Input type='submit'/>
            <Input type='radio'/>
            <Input type='checkbox'/> */}
        </ThemeProvider>

    </>
);

export default App;