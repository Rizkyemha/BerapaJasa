import '../components/signin';

const SIGNIN = {
  async render() {
    return `
      <p id="render">berhasil coba</p>
      <a href="/">kembali</a>
      `;
  },

  async afterRender() {
    const getIdP = document.querySelector('body');
    getIdP.innerHTML = '';
    const signin = document.createElement('signin-section');
    getIdP.append(signin);
  },
};

export default SIGNIN;
