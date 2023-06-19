/* eslint-disable camelcase */
/* eslint-disable no-return-assign */

const Loans = {
  async init(item) {
    this.jenis_loan = item.jenis_loan || item.jenis_pinjaman;
    this.status_lunas = item.status_lunas;

    if (this.status_lunas === 0) {
      this.status_lunas = await 'Belum Lunas';
    }

    if (this.status_lunas === 1) {
      this.status_lunas = await 'Lunas';
    }

    return this.render(item);
  },

  async render(item) {
    return this.innerHTML = `
        <div class="card border-bottom-primary shadow h-100 py-2 ${item.loan_id}" id="container_loan" aria="${item.loan_id}">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <a href="detail.php"><div class="text-xs font-weight-bold text-gray-900 text-uppercase mb-1">${item.nama} | ${item.jenis_loan}</div></a>
                    </div>
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">Rp. ${item.pokok}
                <div class="mb-0 font-weight-bold text-gray-800"><span class="text-xs">Periode</span> <span class="text-xs">${item.periode} Bulan</span><span class="text-xs"> | Bunga</span> <span class="text-xs">${item.bunga}% / perbulan</span></div>
                <div class="row no-gutters align-items-center mt-2">
                    <div class="col-10 row">
                        <div class="text-gray-900 ml-1 mt-1">${this.status_lunas}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
  },
};

module.exports = Loans;
