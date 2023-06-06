/* eslint-disable no-return-assign */
class AboutCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
            <p class="about__img">ini gambar</p>
            <h3 class="about__title">About Us</h3>
            <p class="about__description">Kami adalah tim yang berdedikasi untuk membantu Anda 
            menghitung bunga dengan cepat dan mudah. Dengan teknologi 
            terkini dan perhitungan yang akurat, kami berkomitmen untuk 
            memberikan pengalaman terbaik kepada pengguna kami. Kami 
            percaya bahwa penghitungan bunga tidak harus rumit, dan 
            dengan website kami, Anda dapat melakukan perhitungan dengan 
            mudah tanpa harus repot mencari rumus atau kalkulator.</p>
          `;
  }
}

customElements.define('about-us', AboutCreator);
