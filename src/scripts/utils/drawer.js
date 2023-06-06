import DrawerInit from './drawer-init';

class InitAppShell {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
  }

  _remoteNav() {
    DrawerInit.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

export default InitAppShell;
