/* eslint-disable no-return-assign */
class JumbotronCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
        <h1 class="jumbotron__title">Get Money No Worry</h1>
        <p class="jumbotron__description">Hitung bunga pinjaman Anda dengan mudah dan cepat! Jangan 
        biarkan masalah perhitungan bunga membebani keuangan Anda, gunakan 
        aplikasi kami dan kelola keuangan Anda dengan lebih baik.</p>
        <button class="jumbotron__button">Mulai Sekarang</button>
    `;
  }
}

customElements.define('section-jumbotron', JumbotronCreator);
