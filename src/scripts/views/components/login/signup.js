/* eslint-disable class-methods-use-this */
/* eslint-disable object-shorthand */
import BerapaJasaDBSource from '../../../data/berapajasa-api';
import setDataLogin from '../../../data/setSession-Storage';

class SignupCreator extends HTMLElement {
  connectedCallback() {
    this.render();
    // this._register(); jangan diubah
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return (this.innerHTML = `
    <div class="back-button">
      <button>
        <a href="#/dashboard"><i class="fa-solid fa-arrow-left"></i></a>
      </button>
    </div>
    <div class="signup-section__container">
        <h3 class="signup-section__title">Sign Up</h3>
        <div class="signup-section__input-container">
          <div class="area-name">        
            <input id="input__name_depan" type="text" class="input__name" placeholder="First name">
            <input id="input__name_belakang" type="text" class="input__name" placeholder="Last name">
          </div>
            <input id="input__email_username" type="text" class="input__email" placeholder="Email">
            <input id="input__password" type="password" class="input__password" placeholder="Password">
            <input id="input__validasi__password" type="password" class="input__password" placeholder="Validasi Password">
            <div class="container-gender">
              <label class="item-gender">
                <input type="radio" name="gender" value="Laki-laki" id="gender">
                <span>Laki-laki</span>
              </label>
              <label>
                <input type="radio" name="gender" value="Perempuan">
                <span>Perempuan</span>
              </label>
            </div>
            <input id="date" type="date" class="tanggal">
            <textarea name="" class="alamat" id="alamat" cols="30" rows="10"></textarea>
            <div class="button-container-regis">
              <button class="signin"><a href="#/signin">Sign in</a></button>
              <button id="register__button" class="regis">Register</button>
            </div>
        </div>
    </div>
    `);
  }

  async _register() {
    const registerButton = this.querySelector('#register__button');
    registerButton.addEventListener('click', async () => {
      const requestBody = await this._dataRegister();
      const response = await BerapaJasaDBSource.register(requestBody);
      if (response) {
        this._dataSetSession(response);
        console.log('silahkan login');
      }
    });
  }

  async _dataRegister() {
    const namaDepan = await this.querySelector('#input__name_depan').value;
    const namaBelakang = await this.querySelector('#input__name_belakang').value;
    const nama = `${namaDepan} ${namaBelakang}`;
    const username = await this.querySelector('#input__email_username').value;
    const password = await this.querySelector('#input__password').value;
    const valPassword = await this.querySelector('#input__validasi__password').value;
    if (password !== valPassword) {
      return null;
    }
    const gender = async () => {
      const valGender = await this.querySelector('#gender');
      if (valGender === 'laki-laki') {
        return 'laki-laki';
      }
      return 'perempuan';
    };
    const date = await this.querySelector('#date').value;
    const alamat = await this.querySelector('#alamat').value;
    return {
      nama: nama,
      username: username,
      password: password,
      gender: await gender(),
      tgl_lahir: date,
      alamat: alamat,
    };
  }

  async _dataSetSession(response) {
    const toString = JSON.stringify(response);
    setDataLogin.userLogin(toString);
  }
}

customElements.define('signup-section', SignupCreator);
