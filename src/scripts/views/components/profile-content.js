/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */

class ProfileContentCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  flat() {
    return `
            <p>ini flat</p>
        `;
  }

  efektif() {
    return `
            <p>ini Efektif</p>
        `;
  }

  anuitas() {
    return `
            <p>ini Anuitas</p>
        `;
  }

  render() {
    return this.innerHTML = `
            ${this.flat()}
            ${this.efektif()}
            ${this.anuitas()}
        `;
  }
}

customElements.define('profile-content', ProfileContentCreator);
