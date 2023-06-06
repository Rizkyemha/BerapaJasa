/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
// import CSS nya
import '../styles/small.css';
import '../styles/medium.css';
import '../styles/large.css';

import App from './views/app';

console.log('bundler jalan h3h3');

const app = new App({
  content: document.querySelector('body'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
