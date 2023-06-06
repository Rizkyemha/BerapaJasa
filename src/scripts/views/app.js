import urlParse from '../routes/url-parse';
import routes from '../routes/route';
import InitAppShell from '../utils/drawer';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = urlParse.WithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const createDrawer = new InitAppShell({
      button: document.querySelector('#hamburgerButton'),
      drawer: document.querySelector('#navigationDrawer'),
      content: document.querySelector('#mainContent'),
    });

    createDrawer._remoteNav();
  }
}

export default App;
