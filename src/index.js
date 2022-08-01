import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';
import { Provider } from 'react-redux';
import store from './store/store';
import './reboot/_bootstrap-reboot.min.scss';
import './index.scss';
import './fonts/fonts.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
