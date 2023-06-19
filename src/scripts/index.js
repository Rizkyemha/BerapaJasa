/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
// import CSS nya
import '../styles/small.css';
import '../styles/medium.css';
import '../styles/large.css';
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import '../styles/sb-admin-2.min.css';
import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
  content: document.querySelector('body'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
