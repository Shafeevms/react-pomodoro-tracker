import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import App from './App';

// import dayjs from 'dayjs';
// import 'dayjs/locale/ru';

import './reset.css';
import 'normalize.css';
import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';

// dayjs.locale('ru');

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

