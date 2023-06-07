class SigninCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return this.innerHTML = `
    <a href="#/dashboard">back-button</a>
      <div class="signin-section__container">
          <h3 class="signin-section__title">Sign In</h3>
          <div class="signin-section__input-container">
              <input type="text" class="input__email">
              <input type="password" class="input__password">
              <a href="#/signup" class="button__signup">Sign up</a>
              <button class="button__signin">Sign In</button>
          </div>
      </div>
      `;
  }
}

customElements.define('signin-section', SigninCreator);
