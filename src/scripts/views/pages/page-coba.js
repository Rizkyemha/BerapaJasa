const COBA = {
  async render() {
    return `
    <p id="render">berhasil coba</p>
    <a href="/">kembali</a>
    `;
  },

  async afterRender() {
    console.log('berhasil after render');
  },
};

export default COBA;
