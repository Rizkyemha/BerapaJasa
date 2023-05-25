import '../components/signup';

const SIGNUP = {
  async render() {
    return `
      <p id="render">berhasil coba</p>
      <a href="/">kembali</a>
      `;
  },

  async afterRender() {
    const getIdP = document.querySelector('body');
    getIdP.innerHTML = '';
    const signup = document.createElement('signup-section');
    getIdP.append(signup);
  },
};

export default SIGNUP;
