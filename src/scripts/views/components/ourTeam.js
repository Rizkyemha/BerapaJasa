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
                    <div class="team__item__img-rizky"></div>
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">M. Rizky Mahendra</h4>
                        <p  class="team__item__info__role">Back-End || PM</p>
                    </div>
                </article>
                <article class="team__item">
                    <div class="team__item__img-fadiya"></div>
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Fadiya Qurotun N</h4>
                        <p  class="team__item__info__role">Front-End</p>
                    </div>
                </article>
                <article class="team__item">
                    <div class="team__item__img-wisnu"></div>
                    <div class="team__item__info">
                        <h4 class="team__item__info__name">Wisnu Arizky k</h4>
                        <p  class="team__item__info__role">Front-End</p>
                    </div>
                </article>
                <article class="team__item">
                    <div class="team__item__img-ivana"></div>
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
