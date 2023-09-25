import React, { useState } from 'react';

import ResetStyle from './global/Reset';
import GlobalStyle from './global/Global';

import themeSettings from './global/theme';

import { ThemeProvider } from 'styled-components';
import { CurrentPageContext } from '../context/context';

import { Page1, Page2, Page3, Page4 } from './Pages';

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
                        {activePage === 1 && <Page1  />}
                        {activePage === 2 && <Page2 />}
                        {activePage === 3 && <Page3 />}
                        {activePage === 4 && <Page4 />}
                    </Provider>
            </ThemeProvider>
        </>
    )
};

export default App;