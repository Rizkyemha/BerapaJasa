/* eslint-disable no-return-assign */
class AboutCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return (this.innerHTML = `
    <div class="about-isi">
      <div class="about-tulisan">
        <h3>About Us</h3>
        <p>BerapaJasa adalah tim yang berdedikasi untuk membantu Anda 
        menghitung bunga dengan cepat dan mudah. Dengan teknologi 
        terkini dan perhitungan yang akurat, kami berkomitmen untuk 
        memberikan pengalaman terbaik kepada pengguna kami. <br>Kami 
        percaya bahwa penghitungan bunga tidak harus rumit, dan 
        dengan website kami, Anda dapat melakukan perhitungan dengan 
        mudah tanpa harus repot mencari rumus atau kalkulator.</p>
      </div>
      <div class="about-image"></div>
  </div>
          `);
  }
}

customElements.define('about-us', AboutCreator);
