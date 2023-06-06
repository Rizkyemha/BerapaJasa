/* eslint-disable no-return-assign */
class ProductAboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
          <h3 class="team__title">Our Team</h3>
          <p class="team__slogan">Alone you are great, but together you’ll be stronger”</p>
          <team-items class="team__items">
                <team-item class="team__item">
                    <p class="team__item__img">ini gambar</p>
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">M. Risky Mahendra</h4>
                        <p  class="team__item__info__role">Front-End || PM</p>
                    </div>
                </team-item>
                <team-item>
                    <p class="team__item__img">ini gambar</p>
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Fadiya Qurotun N</h4>
                        <p  class="team__item__info__role">Front-End</p>
                    </div>
                </team-item>
                    <team-item>
                    <p class="team__item__img">ini gambar</p>
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Wisnu Arizky P</h4>
                        <p  class="team__item__info__role">Back-End</p>
                    </div>
                </team-item>
                <team-item>
                    <p class="team__item__img">ini gambar</p>
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Ivana Hayyu</h4>
                        <p  class="team__item__info__role">Back-End || UI / UX Desainer</p>
                    </div>
                </team-item>
          </team-items>
          `;
  }
}

customElements.define('our-team', ProductAboutUs);
