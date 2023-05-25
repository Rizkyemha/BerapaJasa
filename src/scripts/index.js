/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
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
