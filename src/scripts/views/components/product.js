/* eslint-disable no-return-assign */
class ProductCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
        <h1 class="service__header">What Can We Do ?</h1>
        <service-items class="service__items">
            <service-item class="service__item">
                <p class="service__item__img">ini gambar</p>
                <h3 class="service__item__title">Hitung Pinjaman Flat</h3>
                <p class="service__item__description">Jenis pinjaman di mana jumlah cicilan 
                yang harus dibayarkan setiap bulannya tetap.</p>
                <div class="service__item__start">
                    <p>Let's get Start it</p>
                    <button>-></button>
                </div>
            </service-item>
            <service-item class="service__item">
                <p class="service__item__img">ini gambar</p>
                <h3 class="service__item__title">Hitung Pinjaman Efektif</h3>
                <p class="service__item__description">Jenis pinjaman di mana jumlah cicilan 
                yang harus dibayarkan setiap bulannya tetap.</p>
                <div class="service__item__start">
                    <p>Let's get Start it</p>
                    <button>-></button>
                </div>
            </service-item>
            <service-item class="service__item">
                <p class="service__item__img">ini gambar</p>
                <h3 class="service__item__title">Hitung Pinjaman Anuitas</h3>
                <p class="service__item__description">Jenis Pinjaman dimana pembayaran cicilan setiap bulannya tetap, namun 
                proporsi antara bagian bunga dan pokok dalam cicilan berubah seiring waktu.</p>
                <div class="service__item__start">
                    <p>Let's get Start it</p>
                    <button>-></button>
                </div>
            </service-item>
        </service-items>
        `;
  }
}

customElements.define('product-service', ProductCreator);
