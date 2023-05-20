import urlParse from '../routes/url-parse';
import routes from '../routes/route';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = urlParse.WithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
