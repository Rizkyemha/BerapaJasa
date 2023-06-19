/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */
import '../register-loan/register';

class ProfileContentCreator extends HTMLElement {
  connectedCallback() {
    this.render();
    this.drawer();
  }

  async render() {
    return this.innerHTML = `
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <button id="button_registrasi" data-toggle="modal" data-target="#pinjamanModal" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fa-sharp fa-solid fa-money-bill-transfer text-white-50"></i> Ajukan Pinjaman</button>
      </div>

      <!-- Isinya -->

      <div class="row" id="loan__Items">
    </div>
    <register-creator></register-creator>
        `;
  }

  async drawer() {
    const button = await document.querySelector('#button_registrasi');
    const regisElement = await document.querySelector('.modal');
    const content = await document.querySelector('.close');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      regisElement.style.display = 'block';
      regisElement.style.opacity = '100%';
    });
    content.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      regisElement.style.display = 'none';
      regisElement.style.opacity = '0%';
    });
  }
}

customElements.define('profile-content', ProfileContentCreator);
