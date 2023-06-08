class SignupCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return (this.innerHTML = `
    <div class="back-button">
      <button>
        <a href="#/dashboard"><i class="fa-solid fa-arrow-left"></i></a>
      </button>
    </div>
    <div class="signup-section__container">
        <h3 class="signup-section__title">Sign Up</h3>
        <div class="signup-section__input-container">
          <div class="area-name">        
            <input type="text" class="input__name" placeholder="First name">
            <input type="text" class="input__name" placeholder="Last name">
          </div>
            <input type="text" class="input__email" placeholder="Email">
            <input type="password" class="input__password" placeholder="Password">
            <input type="password" class="input__password" placeholder="Validasi Password">
            <div class="container-gender">
              <label class="item-gender">
                <input type="radio" value="Laki-laki">
                <span>Laki-laki</span>
              </label>
              <label>
                <input type="radio" value="Perempuan">
                <span>Perempuan</span>
              </label>
            </div>
            <input type="date" class="tanggal">
            <textarea name="" class="alamat" id="" cols="30" rows="10"></textarea>
            <div class="button-container-regis">
              <button class="signin"><a href="#/signin">Sign in</a></button>
              <button class="regis">Register</button>
            </div>
        </div>
    </div>
    `);
  }
}

customElements.define('signup-section', SignupCreator);
