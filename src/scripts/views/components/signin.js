class SigninCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return this.innerHTML = `
    <a href="#/dashboard">back-button</a>
      <div>
          <h3>Sign In</h3>
          <div>
              <input type="text">
              <input type="password">
              <a href="#/signup">Sign up</a>
              <button>Log in</button>
          </div>
      </div>
      `;
  }
}

customElements.define('signin-section', SigninCreator);
