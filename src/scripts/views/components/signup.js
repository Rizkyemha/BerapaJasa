class SignupCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return this.innerHTML = `
    <a href="#/dashboard">back-button</a>
    <div>
        <h3>Sign Up</h3>
        <div>
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="password">
            <div>
              <label>
                <input type="checkbox" name="fruit" value="Laki-laki">
                <span>Laki-laki</span>
              </label>
              <label>
                <input type="checkbox" name="fruit" value="Perempuan">
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
