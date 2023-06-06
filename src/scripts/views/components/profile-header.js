/* eslint-disable no-return-assign */
class ProfileHeaderCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
        <div>
            <p>ini gambar</p>
            <div>
                <p>Rizky Mahendra</p>
                <p>rizkyemha_</p>
            </div>
        </div>
        <div>
            <div>background 1</div>
            <div>background 2</div>
        </div>
        `;
  }
}

customElements.define('profile-header', ProfileHeaderCreator);
