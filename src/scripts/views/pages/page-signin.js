/* eslint-disable consistent-return */
import '../components/login/signin';
import Main from '../components/main-content';
import getDataLogin from '../../data/getSession-Storage';
import BerapaJasaDBSource from '../../data/berapajasa-api';

const SIGNIN = {
  async render() {
    // this._userExistonSession();
    return `
      `;
  },

  async afterRender() {
    const getIdP = document.querySelector('body');
    getIdP.innerHTML = Main.render();
    const main = document.querySelector('#mainContent');
    const signin = document.createElement('signin-section');
    main.append(signin);
  },

  async _userExistonSession() {
    const user = await getDataLogin.userLogin();
    if (user == null) {
      return;
    }
    const userDb = await BerapaJasaDBSource.login({
      username: user.username,
      password: 123, // static
    });
    if (userDb == null) {
      return;
    }
    if (user.username === userDb.username && user.password === userDb.password) {
      window.location.hash = '/profile';
    }
  },
};

export default SIGNIN;
