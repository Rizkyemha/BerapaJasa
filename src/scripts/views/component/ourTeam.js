/* eslint-disable no-return-assign */
class ProductAboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
          <h3>Our Team</h3>
          <p>“Alone you are great, but together you’ll be stronger”</p>
          <teams-item>
                <team-item>
                    <p>ini gambar</p>
                    <div>
                        <h4>M. Risky Mahendra</h4>
                        <p>Front-End || PM</p>
                    </div>
                </team-item>
                <team-item>
                    <p>ini gambar</p>
                    <div>
                        <h4>Fadiya Qurotun N</h4>
                        <p>Front-End</p>
                    </div>
                </team-item>
                    <team-item>
                    <p>ini gambar</p>
                    <div>
                        <h4>Wisnu Arizky P</h4>
                        <p>Back-End</p>
                    </div>
                </team-item>
                <team-item>
                    <p>ini gambar</p>
                    <div>
                        <h4>Ivana Hayyu</h4>
                        <p>Back-End || UI / UX Desainer</p>
                    </div>
                </team-item>
          </teams-item>
          `;
  }
}

customElements.define('our-teams', ProductAboutUs);
