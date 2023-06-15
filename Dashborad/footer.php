<!-- /.container-fluid -->
</div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Berapa Jasa &copy; 2023</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Yakin ingin keliar?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Jika anda ingin keluar, coba aja pencet</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.php">Logout</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Ajukan Pinjaman Modal-->
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
              <input type="text" name="namaPinjaman" id="" class="form-control mt-2" placeholder="Nama Pinjaman" />
              <input type="number" name="nominalPinjaman" id="pinjamanInput" placeholder="Nominal Pinjaman" class="form-control mt-3" />
              <select name="jenisPinjaman" id="" class="form-control mt-3">
                <option value="" selected="">-Pilih Jenis Pinjaman-</option>
                <option value="" name="flat">Flat</option>
                <option value="" name="efektif">Efektif</option>
                <option value="" name="anuitas">Anuitas</option>
              </select>
              <div class="input-bunga">
                <input type="number" name="nominalPinjaman" id="bungaInput" class="form-control mt-3 bunga" />
                <span class="label-bunga">%</span>
              </div>
              <div class="input-bulan">
                <input type="number" name="nominalPinjaman" id="bulanInput" class="form-control mt-3 bulan" />
                <span class="label-bulan">Bulan</span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <button type="Submit" name="ajukan" class="btn btn-success">Ajukan</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Modal-->
    <div class="modal fade" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Profile</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="" method="POST">
              <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <input type="text" class="form-control form-control-user" id="exampleFirstName" value="Wisnu" />
                </div>
                <div class="col-sm-6">
                  <input type="text" class="form-control form-control-user" id="exampleLastName" value="Arizky" />
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control form-control-user" id="exampleInputUsername" value="wisnuarz.k" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control form-control-user" id="exampleInputEmail" value="wisnuarizky01@gmail.com" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control form-control-user" id="exampleInputPassword" value="12345" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control form-control-user" id="exampleInputConfirmPassword" value="12345" />
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
                <textarea class="form-control" id="inputAddress" rows="3"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <button type="Submit" name="simpan" class="btn btn-success">Simpan</button>
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

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>
  </body>
</html>
