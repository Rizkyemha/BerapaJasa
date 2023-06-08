class SigninCreator extends HTMLElement {
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
      <div class="signin-section__container">
          <h3 class="signin-section__title">Sign In</h3>
          <div class="signin-section__input-container">
              <input type="text" class="input__email" placeholder="Username">
              <input type="password" class="input__password" placeholder="Password">
          </div>
          <div class="button-container">
            <button class="button__signup"><a href="#/signup"">Sign up</a></button>
            <button class="button__signin">Login</button>
          </div>
      </div>
      `);
  }
}

customElements.define('signin-section', SigninCreator);
