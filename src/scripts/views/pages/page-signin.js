/* eslint-disable consistent-return */
import '../components/login/signin';
import getDataLogin from '../../data/getSession-Storage';
import BerapaJasaDBSource from '../../data/berapajasa-api';

const SIGNIN = {
  async render() {
    return `
      `;
  },

  async afterRender() {
    const getIdP = document.querySelector('body');
    getIdP.innerHTML = '';
    const signin = document.createElement('signin-section');
    signin.classList.add('bg-gradient-primary');
    getIdP.append(signin);
    this._userExistonSession();
  },

  async _userExistonSession() {
    const user = await getDataLogin.userLogin();
    if (user == null) {
      return;
    }
    const userDb = await BerapaJasaDBSource.login({
      username: user.username,
      password: user.password,
    });
    if (userDb == null) {
      return;
    }
    if (user.username === userDb.username && user.password === userDb.password) {
      window.location.hash = `/profile/${user.id}`;
    }
  },
};

export default SIGNIN;
