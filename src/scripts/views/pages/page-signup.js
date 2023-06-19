import '../components/login/signup';
// import user from '../../../datas/static-test-data';
// import setDataLogin from '../../data/setSession-Storage';
import getDataLogin from '../../data/getSession-Storage';
import BerapaJasaDBSource from '../../data/berapajasa-api';

const SIGNUP = {
  async render() {
    this._userExistonSession();
    return `
      <p id="render">berhasil coba</p>
      <a href="/">kembali</a>
      `;
  },

  async afterRender() {
    const getIdP = document.querySelector('body');
    getIdP.innerHTML = '';
    const signup = document.createElement('signup-section');
    signup.classList.add('bg-gradient-primary');
    getIdP.append(signup);
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

export default SIGNUP;
