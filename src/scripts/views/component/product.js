/* eslint-disable no-return-assign */
class ProductCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
        <h1>What Can We Do ?</h1>
        <service-items>
            <service-item>
                <p>ini gambar</p>
                <h3>Hitung Pinjaman Flat</h3>
                <p>Jenis pinjaman di mana jumlah cicilan 
                yang harus dibayarkan setiap bulannya tetap.</p>
                <div>
                    <p>Let's get Start it</p>
                    <button>-></button>
                </div>
            </service-item>
                <service-item>
                <p>ini gambar</p>
                <h3>Hitung Pinjaman Efektif</h3>
                <p>jenis pinjaman di mana bunga yang harus dibayar oleh peminjam 
                dihitung berdasarkan saldo pinjaman yang masih beredar setiap bulannya.</p>
                <div>
                    <p>Let's get Start it</p>
                    <button>-></button>
                </div>
            </service-item>
            <service-item>
                <p>ini gambar</p>
                <h3>Hitung Pinjaman Anuitas</h3>
                <p>Jenis Pinjaman dimana pembayaran cicilan setiap bulannya tetap, namun 
                proporsi antara bagian bunga dan pokok dalam cicilan berubah seiring waktu.</p>
                <div>
                    <p>Let's get Start it</p>
                    <button>-></button>
                </div>
            </service-item>
        </service-items>
        `;
  }
}

customElements.define('product-service', ProductCreator);
