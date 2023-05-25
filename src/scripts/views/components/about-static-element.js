/* eslint-disable no-return-assign */
class AboutCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
            <p>ini gambar</p>
            <h3>About Us</h3>
            <p>Kami adalah tim yang berdedikasi untuk membantu Anda 
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
