/* eslint-disable no-return-assign */
class ProductCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return (this.innerHTML = `
        <h2>What Can We Do ?</h2>
        <div class="service-items">
            <div class="service-item">
                <div class="image-pinjaman-1"></div>
                <h3>Pinjaman Flat</h3>
                <p>Jenis pinjaman di mana jumlah cicilan 
                yang harus dibayarkan setiap bulannya tetap.</p>
                <div class="button_container">
                    <button>Let's get Start it <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="service-item">
                <div class="image-pinjaman-2"></div>
                <h3>Pinjaman Efektif</h3>
                <p>jenis pinjaman di mana bunga yang harus dibayar oleh peminjam 
                dihitung berdasarkan saldo pinjaman yang masih beredar setiap bulannya.</p>
                <div class="button_container">
                    <button>Let's get Start it <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="service-item">
                <div class="image-pinjaman-3"></div>
                <h3>Pinjaman Anuitas</h3>
                <p>Jenis Pinjaman dimana pembayaran cicilan setiap bulannya tetap, namun 
                proporsi antara bagian bunga dan pokok dalam cicilan berubah seiring waktu.</p>
                <div class="button_container">
                    <button>Let's get Start it <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        `);
  }
}

customElements.define('product-service', ProductCreator);
