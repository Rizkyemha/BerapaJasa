<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <title>SB Admin 2 - Register</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet" />
  </head>

  <body class="bg-gradient-primary">
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
                      <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                    </div>
                    <div class="col-sm-6">
                      <input type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-user" id="exampleInputUsername" placeholder="Username" />
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user" id="exampleInputConfirmPassword" placeholder="Confirm Password" />
                  </div>
                  <div class="form-group text-center">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="radioMale" name="gender" class="custom-control-input" value="male" checked />
                      <label class="custom-control-label" for="radioMale">Laki-laki</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="radioFemale" name="gender" class="custom-control-input" value="female" />
                      <label class="custom-control-label" for="radioFemale">Perempuan</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" id="inputAddress" placeholder="Masukkan alamat Anda" rows="3"></textarea>
                  </div>

                  <a href="login.php" class="btn btn-primary btn-user btn-block"> Sign In </a>
                </form>
                <hr />
                <div class="text-center">
                  <a class="small" href="login.php">Apakah kamu memiliki akun? Login!</a>
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
  </body>
</html>
