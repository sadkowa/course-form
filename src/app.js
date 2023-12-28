import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import { Provider } from 'react-redux';
import { store } from './modules/store';

const root = createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
