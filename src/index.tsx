import React from 'react';
import ReactDOM from 'react-dom';

import Router from '@/routes/Router';
import Global from '@/Global';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
