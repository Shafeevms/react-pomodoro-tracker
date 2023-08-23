import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/ru';
import 'normalize.css';
import 'reset-css';

import { persistor, store } from './store';
import App from './App';

import './index.scss';

dayjs.locale('ru');

dayjs.extend(duration);
dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);

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

export { WEEKDAYS } from './helpers/date';
export { DAYS } from './helpers/date';
