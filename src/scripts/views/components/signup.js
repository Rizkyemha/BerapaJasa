class SignupCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return this.innerHTML = `
    <a href="#/dashboard">back-button</a>
    <div class="signup-section__container">
        <h3 class="signup-section__title">Sign Up</h3>
        <div class="signup-section__input-container">
            <input type="text" class="input__name">
            <input type="text" class="input__name">
            <input type="text" class="input__email">
            <input type="password" class="input__password">
            <div class="container-gender">
              <label class="item-gender">
                <input type="checkbox" value="Laki-laki">
                <span>Laki-laki</span>
              </label>
              <label>
                <input type="checkbox" value="Perempuan">
                <span>Perempuan</span>
              </label>
            </div>
            <input type="date">
            <input type="text">
            <a href="#/signin">Sign in</a>
            <button>Register</button>
        </div>
    </div>
    `;
  }
}

customElements.define('signup-section', SignupCreator);
