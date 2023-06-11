/* eslint-disable class-methods-use-this */
import BerapaJasaDBSource from '../../../data/berapajasa-api';
import setDataLogin from '../../../data/setSession-Storage';

class SigninCreator extends HTMLElement {
  connectedCallback() {
    this.render();
    // this._login(); jangan diubah
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return (this.innerHTML = `
    <div class="back-button">
      <button>
        <a href="#/dashboard"><i class="fa-solid fa-arrow-left"></i></a>
      </button>
    </div>
      <div class="signin-section__container">
          <h3 class="signin-section__title">Sign In</h3>
          <div class="signin-section__input-container">
              <input id="username" type="text" class="input__email" placeholder="Username">
              <input id="password" type="password" class="input__password" placeholder="Password">
          </div>
          <div class="button-container">
            <button class="button__signup"><a href="#/signup"">Sign up</a></button>
            <button id="button__signin" class="button__signin">Login</button>
          </div>
      </div>
      `);
  }

  async _login() {
    const button = this.querySelector('#button__signin');
    button.addEventListener('click', async () => {
      const requestBody = await this._dataLogin();
      const response = await BerapaJasaDBSource.login(requestBody);
      if (response) {
        this._dataSetSession(response);
        window.location.hash = '/profile';
      }
    });
  }

  async _dataLogin() {
    const username = this.querySelector('#username').value;
    const password = this.querySelector('#password').value;
    return {
      username,
      password,
    };
  }

  async _dataSetSession(response) {
    const toString = await JSON.stringify(response);
    setDataLogin.userLogin(toString);
  }
}

customElements.define('signin-section', SigninCreator);
