import '../components/signin';
import Main from '../components/main-content';
import user from '../../../datas/static-test-data';
import setDataLogin from '../../data/setSession-Storage';

const SIGNIN = {
  async render() {
    return `
      `;
  },

  async loginDoor() {
    const userLoan = user[0];
    setDataLogin.userLogin(JSON.stringify(userLoan));
    return console.log(`nama: ${userLoan.name} id: ${userLoan.id}`);
  },

  async afterRender() {
    const getIdP = document.querySelector('body');
    getIdP.innerHTML = Main.render();
    const main = document.querySelector('#mainContent');
    const signin = document.createElement('signin-section');
    main.append(signin);
    this.loginDoor();
  },
};

export default SIGNIN;
