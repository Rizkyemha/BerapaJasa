const HEADER = {
  render() {
    return `
    <header class="app-bar">
      <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>  
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/tools">Tools</a></li>
              <li><a href="#/coba">About</a></li>
              <li><a href="#/coba">Team's</a></li>
              <li><a href="#/coba">Contact</a></li>
              <li><a href="#/profile">Profile</a></li>
            </ul>
        </nav>
      <div class="app-bar__brand">
        <h1>Berapa Jasa</h1>
      </div>
      <div class="app-bar__menu">
          <button id="hamburgerButton"><i class="fa-solid fa-user"></i></button>
      </div>
      <nav id="navigationDrawer" class="app-bar__user">
        <ul>
          <li><a href="#/signin">Sign-in</a></li>
          <li><a href="#/signup">Sign-up</a></li>
        </ul>
      </nav>
    </header>
        `;
  },
};

export default HEADER;
