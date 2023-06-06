/* eslint-disable no-return-assign */
class JumbotronCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
    <div class="jumbotron">
      <h2>Get Money No Worry</h2>
      <p>Hitung bunga pinjaman Anda dengan mudah dan cepat! Jangan 
      biarkan masalah perhitungan bunga membebani keuangan Anda, gunakan 
      aplikasi kami dan kelola keuangan Anda dengan lebih baik.</p>
      <button>Mulai Sekarang</button>
    </div>
  `
  };
}

customElements.define('section-jumbotron', JumbotronCreator);
