const HOME = {
  render() {
    return `
    <p>berhasil home</p>
    `;
  },

  afterRender() {
    const getIdP = document.querySelector('#mainContent');
    const contentHome = document.createElement('a');
    contentHome.innerHTML = ' coba';
    contentHome.setAttribute('href', '#/coba');
    getIdP.append(contentHome);
  },
};

export default HOME;
