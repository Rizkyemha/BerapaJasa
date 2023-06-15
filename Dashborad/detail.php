<?php include "header.php"; ?>
          <div class="container-fluid">
            <!-- Page Heading -->

            <!-- Isinya -->
            <div class="container">
              <div class="panel panel-info">
                <div class="panel-heading">
                  <h3>Detail Pinjaman</h3>
                </div>
                <div class="panel panel-body">
                  <table class="table table-bordered table-striped">
                    <tr>
                      <td>Nama Pinjaman</td>
                      <td>Main Slot</td>
                    </tr>
                    <tr>
                      <td>Jenis Pinjaman</td>
                      <td>Anuitas</td>
                    </tr>
                    <tr>
                      <td>Nominal Pinjaman</td>
                      <td>Rp. 4.000.000</td>
                    </tr>
                    <tr>
                      <td>Bunga Pinjaman</td>
                      <td>5%</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="panel panel-info mt-4">
              <div class="panel-heading">
                <h3>Tagihan Pinjaman</h3>
              </div>
              <div class="panel-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>NO</th>
                    <th>Bulan</th>
                    <th>Jumlah</th>
                    <th>Keterangan</th>
                    <th>Bayar</th>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Juni, 2023</td>
                    <td>100000</td>
                    <td>Lunas</td>
                    <td class="text-center">
                      <a href="#" class="btn btn-danger btn-sm">Batal</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Juli, 2023</td>
                    <td>100000</td>
                    <td></td>
                    <td class="text-center">
                      <a href="#" class="btn btn-primary btn-sm">Bayar</a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Agustus, 2023</td>
                    <td>100000</td>
                    <td></td>
                    <td class="text-center">
                      <a href="#" class="btn btn-primary btn-sm">Bayar</a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- Tutup Isi -->
          </div>
<?php include "footer.php"; ?>