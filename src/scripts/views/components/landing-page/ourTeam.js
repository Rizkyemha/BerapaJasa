/* eslint-disable no-return-assign */
class ProductAboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return (this.innerHTML = `
        <div class = "team-isi">
          <h3 class="team__title">Our Team</h3>
          <p class="team__slogan">Alone you are great, but together you’ll be stronger”</p>
          <team-items class="team__items">
                <article class="team__item">
                    <img class="team__item-image" src="./image/rizky.jpg" alt="" />
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">M. Rizky M</h4>
                        <p  class="team__item__info__role">Back-End || PM</p>
                    </div>
                </article>
                <article class="team__item">
                    <img class="team__item-image" src="./image/fadiya.jpg" alt="" />
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Fadiya Qurotun</h4>
                        <p  class="team__item__info__role">Front-End</p>
                    </div>
                </article>
                <article class="team__item">
                    <img class="team__item-image" src="./image/wisnu.jpg" alt="" />
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Wisnu Arizky</h4>
                        <p  class="team__item__info__role">Front-End</p>
                    </div>
                </article>
                <article class="team__item">
                <img class="team__item-image" src="./image/ivana.jpg" alt="" />
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Ivana Hayyu</h4>
                        <p  class="team__item__info__role">UI / UX Desainer</p>
                    </div>
                </article>
          </team-items>
        </div>
          `);
  }
}

customElements.define('our-team', ProductAboutUs);
