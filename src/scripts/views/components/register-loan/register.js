/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */

import Loans from '../../templates/creator-loans';

const BerapaJasaDBSource = require('../../../data/berapajasa-api');

class RegisterCreator extends HTMLElement {
  connectedCallback() {
    this.render();
    this.registrasi_event();
  }

  render() {
    return this.innerHTML = `
    <div class="modal fade" id="pinjamanModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ajukan Pinjaman</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="" method="POST">
              <input type="text" name="namaPinjaman" id="input_nama_pinjaman" class="form-control mt-2" placeholder="Nama Pinjaman" />
              <input type="number" name="nominalPinjaman" id="input_pokok_pinjaman" placeholder="Nominal Pinjaman" class="form-control mt-3" />
              <select name="jenisPinjaman" id="input_jenis_pinjaman" class="form-control mt-3">
                <option value="" selected="">-Pilih Jenis Pinjaman-</option>
                <option value="flat" name="flat">Flat</option>
                <option value="efektif" name="efektif">Efektif</option>
                <option value="anuitas" name="anuitas">Anuitas</option>
              </select>
              <div class="input-bunga">
                <input type="number" name="nominalPinjaman" id="input_bunga_pinjaman" class="form-control mt-3 bunga" placeholder="Bunga" />
                <span class="label-bunga pl-3">%</span>
              </div>
              <div class="input-bulan">
                <input type="number" name="nominalPinjaman" id="input_periode_pinjaman" class="form-control mt-3 bulan" placeholder="Periode" />
                <span class="label-bulan pl-3">Bulan</span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <button id="registrasi_pinjaman" type="Submit" name="ajukan" class="btn btn-success">Ajukan</button>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  async registrasi() {
    const input = await this.registrasi_input();
    console.log(input);
    const response = await BerapaJasaDBSource.default.register_pinjaman(input);
    this.renderNewPinjaman(response);
  }

  async renderNewPinjaman(response) {
    const getContainerLoan = document.querySelector('#loan__Items');
    const createLoans = document.createElement('div');
    createLoans.classList.add('col-xl-4', 'col-md-6', 'mb-4');
    const loan = await Loans.init(response);
    createLoans.innerHTML = loan;
    getContainerLoan.append(createLoans);
  }

  async registrasi_event() {
    const button = await document.querySelector('#registrasi_pinjaman');
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.registrasi();
    });
  }

  async registrasi_input() {
    const getInputName = await document.getElementById('input_nama_pinjaman').value;
    const getPokokName = await document.getElementById('input_pokok_pinjaman').value;
    const getJenisName = await document.getElementById('input_jenis_pinjaman').value;
    const getBungaName = await document.getElementById('input_bunga_pinjaman').value;
    const getPeriodeName = await document.getElementById('input_periode_pinjaman').value;

    return {
      nama: getInputName,
      pokok: getPokokName,
      bunga: getBungaName,
      periode: getPeriodeName,
      jenis_loan: getJenisName.toLowerCase(),
    };
  }
}

customElements.define('register-creator', RegisterCreator);
