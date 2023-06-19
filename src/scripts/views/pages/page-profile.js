/* eslint-disable camelcase */
/* eslint-disable import/no-import-module-exports */
import Main from '../components/main-content';
import '../components/profile/profile-side-bar';
import '../components/profile/profile-header';
import '../components/profile/profile-content';
import Loans from '../templates/creator-loans';
import getDataLogin from '../../data/getSession-Storage';
import BerapaJasaDBSource from '../../data/berapajasa-api';
import urlParse from '../../routes/url-parse';

const PROFILE = {
  async render() {
    const main = Main.render();
    return main;
  },

  async afterRender() {
    this.cekId();
  },

  async cekId() {
    const Urlid = await urlParse.WithoutCombiner();
    const SessionId = await getDataLogin.userLogin();
    if (!SessionId) {
      window.location.hash = '/signin';
      return;
    }
    if (Urlid.id !== SessionId.id.toLowerCase()) {
      window.location.hash = '/signin';
      return;
    }
    const getMain = document.querySelector('#mainContent');
    const createHeader = document.createElement('profile-header');
    const createContent = document.createElement('profile-content');
    // footer
    getMain.append(createHeader);
    const getContent = document.querySelector('#content');
    getContent.append(createContent);
    await this.renderLoan('', '');
    await this._button();
    // await this.buttonDlt();
  },

  async renderLoan(queryParam1, queryParam2) {
    const getContainerLoan = document.querySelector('#loan__Items');
    getContainerLoan.innerHTML = '';
    const items = await BerapaJasaDBSource.getloans(queryParam1, queryParam2);
    await items.map(async (element) => {
      const createLoans = document.createElement('div');
      createLoans.classList.add('col-xl-4', 'col-md-6', 'mb-4', `${element.loan_id}`);
      const loan = await Loans.init(element);
      createLoans.innerHTML = loan;
      getContainerLoan.append(createLoans);
    });
  },

  async _button() {
    const button = await document.getElementById('nav_items_pinjaman'); // item pinjaman
    const content = await document.getElementById('collapsePages');
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      content.style.display = 'block';
    });

    const button_items = await document.querySelectorAll('#nav_item_pinjaman');
    button_items.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        content.style.display = 'none';
        if (btn.innerHTML.toLowerCase() === 'semua') {
          this.renderLoan('', '');
        }
        if (btn.innerHTML.toLowerCase() === 'flat') {
          this.renderLoan('flat', '');
        }
        if (btn.innerHTML.toLowerCase() === 'efektif') {
          this.renderLoan('efektif', '');
        }
        if (btn.innerHTML.toLowerCase() === 'anuitas') {
          this.renderLoan('anuitas', '');
        }
      });
    });

    const button_lunas = await document.getElementById('nav_items_pinjaman_lunas'); // item lunas
    const content_lunas = await document.getElementById('collapseUtilities');
    button_lunas.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      content_lunas.style.display = 'block';
    });

    const button_items_lunas = await document.querySelectorAll('#nav_item_pinjaman_lunas');
    button_items_lunas.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        content_lunas.style.display = 'none';
        if (btn.innerHTML.toLowerCase() === 'belum lunas') {
          this.renderLoan('', 0);
        }
        if (btn.innerHTML.toLowerCase() === 'lunas') {
          this.renderLoan('', 1);
        }
      });
    });
  },

  async deleteLoan() {
    console.log('Hapus Pinjaman');
  },

  async buttonDlt() {
    const getBtn = await document.querySelectorAll('#btn_delete');
    const getcontentdelete = document.querySelectorAll('#container_loan');
    getcontentdelete.forEach((item) => {
      const ariaV = item.getAttribute('aria');
      console.log(ariaV);
    });
    getBtn.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.deleteLoan();
      });
    });
  },

};

export default PROFILE;
