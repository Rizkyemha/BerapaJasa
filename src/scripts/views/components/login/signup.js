/* eslint-disable class-methods-use-this */
/* eslint-disable object-shorthand */
import BerapaJasaDBSource from '../../../data/berapajasa-api';
import setDataLogin from '../../../data/setSession-Storage';

class SignupCreator extends HTMLElement {
  connectedCallback() {
    this.render();
    this._register();
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return (this.innerHTML = `
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Sign Up!</h1>
                </div>
                <form class="user">
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input type="text" class="form-control form-control-user" id="input__name_depan" placeholder="First Name" />
                    </div>
                    <div class="col-sm-6">
                      <input type="text" class="form-control form-control-user" id="input__name_belakang" placeholder="Last Name" />
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-user" id="input__email_username" placeholder="Username" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user" id="input__password" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user" id="input__validasi__password" placeholder="Confirm Password" />
                  </div>
                  <div class="form-group text-center">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="gender" name="gender" class="custom-control-input" value="laki-laki" checked />
                      <label class="custom-control-label">Laki-laki</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="radioFemale" name="gender" class="custom-control-input" value="perempuan" />
                      <label class="custom-control-label">Perempuan</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <div>
                      <input class="form-control" type="date" id="date">
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" id="alamat" placeholder="Masukkan alamat Anda" rows="3"></textarea>
                  </div>

                  <button class="btn btn-primary btn-user btn-block" id="register__button"> Register </button>
                </form>
                <hr />
                <div class="text-center">
                  <a class="small" href="#/signin">Apakah kamu memiliki akun? Sign in!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>
    `);
  }

  async _register() {
    const registerButton = this.querySelector('#register__button');
    registerButton.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const requestBody = await this._dataRegister();
      const response = await BerapaJasaDBSource.register(requestBody);
      if (response) {
        this._dataSetSession(response);
        window.location.hash = '/signin';
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
