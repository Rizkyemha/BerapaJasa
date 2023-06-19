/* eslint-disable class-methods-use-this */
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
      button: await this.getButton(),
      drawer: document.querySelector('#navigationDrawer'),
      content: document.querySelector('#mainContent'),
    });

    createDrawer._remoteNav();
  }

  async getButton() {
    const getButton = document.querySelectorAll('#hamburgerButton');
    const buttons = Array.from(getButton).map((button) => button);
    return buttons;
  }

  /*
  async getDrawer() {
    const getButton = document.querySelectorAll('#navigationDrawer');
    const drawers = Array.from(getButton).map((drawer) => drawer);
    console.log(drawers);
    return drawers;
  }
  */
}

export default App;
