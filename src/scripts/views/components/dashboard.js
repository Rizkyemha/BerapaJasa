const dashboard = {
  render() {
    return `
            <header class="app-bar">
            <div class="app-bar__menu">
              <button id="hamburgerButton">☰</button>
            </div>
            <div class="app-bar__brand">
              <h1>BerapaJasa</h1>
            </div>
              <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                  <li><a href="#/">Home</a></li>
                  <li><a href="#/coba">Coba sekarang</a></li>
                  <li><a href="#/coba">Tentang kami</a></li>
                  <li><a href="#/coba">Contact</a></li>
                </ul>
              </nav>
          </header>
            <main id="mainContent"></main>
          <footer>
            <h1>BerapaJasa</h1>
            <contacts>
                <a href="/" target="_blank">BerapaJasa@gmail.com</a>
                <a href="/" target="_blank">Github</a>
                <a href="/" target="_blank">Instagram</a>
            </contacts>
            <p>© Kelompok 6, 2023. Dicoding</p>
          </footer>
        `;
  },
};

export default dashboard;
