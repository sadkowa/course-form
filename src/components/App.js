import React, { useState } from 'react';

import ResetStyle from './global/Reset';
import GlobalStyle from './global/Global';

import themeSettings from './global/theme';

import { ThemeProvider } from 'styled-components';
import { CurrentPageContext } from '../context/context';

import { LevelPage, CourseForm, UserDataForm, Summary } from './Pages';

const App = () => {
    const [activePage, setActivePage] = useState(1)
    const { Provider } = CurrentPageContext

    const changePage = (variant) => {
        if (variant === 'right' || variant === 'submit') {
            setActivePage(prevState => prevState + 1)
        }
        if (variant === 'left') {
            setActivePage(prevState => prevState - 1)
        }
    }

    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <ThemeProvider theme={themeSettings}>
                    <Provider value={changePage}>
                    {activePage === 1 && <LevelPage />}
                    {activePage === 2 && <CourseForm />}
                    {activePage === 3 && <UserDataForm />}
                    {activePage === 4 && <Summary />}
                    </Provider>
            </ThemeProvider>
        </>
    )
};

export default App;