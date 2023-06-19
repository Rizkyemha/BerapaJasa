/* eslint-disable class-methods-use-this */
import BerapaJasaDBSource from '../../../data/berapajasa-api';
import setDataLogin from '../../../data/setSession-Storage';

class SigninCreator extends HTMLElement {
  connectedCallback() {
    this.render();
    this._login();
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return (this.innerHTML = `
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Sign In</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input type="type" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Username" />
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input type="checkbox" class="custom-control-input" id="customCheck" />
                          <label class="custom-control-label" for="customCheck">Remember Me</label>
                        </div>
                      </div>
                      <button class="btn btn-primary btn-user btn-block" id="button__signin" > Sign in </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="#/signup">Buat Akun!</a>
                    </div>
                  </div>
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

  async _login() {
    const button = this.querySelector('#button__signin');
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const requestBody = await this._dataLogin();
      const response = await BerapaJasaDBSource.login(requestBody);
      console.log(response);
      if (response) {
        await this._dataSetSession(response);
        window.location.hash = await `/profile/${response.id}`;
      }
    });
  }

  async _dataLogin() {
    const username = this.querySelector('#exampleInputEmail').value;
    const password = this.querySelector('#exampleInputPassword').value;
    return {
      username,
      password,
    };
  }

  async _dataSetSession(response) {
    const toString = await JSON.stringify(response);
    setDataLogin.userLogin(toString);
  }
}

customElements.define('signin-section', SigninCreator);
