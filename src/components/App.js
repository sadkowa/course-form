import React from 'react';

import ResetStyle from './global/Reset';
import GlobalStyle from './global/Global';

import themeSettings from './global/theme';

import { ThemeProvider } from 'styled-components';

import { LevelPage, CourseForm, UserDataForm, Summary } from './views';
import { useSelector } from 'react-redux';

const App = () => {
    const activePage = useSelector(state => state.activePage.page)

    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <ThemeProvider theme={themeSettings}>
                {activePage === 1 && <LevelPage />}
                {activePage === 2 && <CourseForm />}
                {activePage === 3 && <UserDataForm />}
                {activePage === 4 && <Summary />}
            </ThemeProvider>
        </>
    )
};

export default App;