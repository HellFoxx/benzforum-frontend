import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// --- REDUX ---
import store from './redux/redux-store';
import { Provider } from 'react-redux';

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store} >
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

reportWebVitals();
