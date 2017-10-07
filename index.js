import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './component/app.js'
ReactDOM.render(
  <AppContainer>
    <App />  
  </AppContainer>,
  document.getElementById('app')
);
if (module.hot) {
  module.hot.accept('./component/app.js', () => { 
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  });
}