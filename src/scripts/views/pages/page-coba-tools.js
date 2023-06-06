import getDataLogin from '../../data/getSession-Storage';

const TOOLS = {
  async render() {
    return `
      <p id="render">berhasil coba</p>
      <a href="/">kembali</a>
      `;
  },

  async loginFilter() {
    const loginstatus = getDataLogin.userLogin();
    if (loginstatus) {
      return console.log('login berhasil');
    }
    window.location.hash = '/signin';
    return console.log('login gagal karena user tidak cocok');
  },

  async afterRender() {
    this.loginFilter();
    console.log('TOOLS DIBUKA');
  },
};

export default TOOLS;
