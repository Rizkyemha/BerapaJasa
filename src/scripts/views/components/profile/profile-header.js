/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

/* eslint-disable no-return-assign */

class ProfileHeaderCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
            <div id="wrapper">
            <!-- Sidebar -->
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-auto" id="accordionSidebar">
              <!-- Sidebar - Brand -->
              <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
                <div class="sidebar-brand-icon">
                  <img src="../image/img-bootstrap/Logo.png" alt="" class="logo-berapaJasa" />
                </div>
                <div class="sidebar-brand-text mr-3">BerapaJasa</div>
              </a>

              <!-- Divider -->
              <hr class="sidebar-divider my-0" />

              <!-- Nav Item - Dashboard -->
              <li class="nav-item active">
                <a class="nav-link" href="index.php">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></a
                >
              </li>

              <!-- Divider -->
              <hr class="sidebar-divider" />

              <!-- Pinjaman -->
              <div class="sidebar-heading">Pinjaman</div>

              <!-- Nav Item - Pinjaman -->
              <li class="nav-item">
                <button id="nav_items_pinjaman" class="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                  <i class="fas fa-fw fa-folder"></i>
                  <span>Daftar Pinjaman</span>
                </button>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a id="nav_item_pinjaman" class="collapse-item">Semua</a>
                    <a id="nav_item_pinjaman" class="collapse-item">Flat</a>
                    <a id="nav_item_pinjaman" class="collapse-item">Efektif</a>
                    <a id="nav_item_pinjaman" class="collapse-item">Anuitas</a>
                  </div>
                </div>
              </li>

              <!-- Nav item - Pelunasan -->
              <li class="nav-item">
                <button id="nav_items_pinjaman_lunas" class="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                  <i class="fa-solid fa-money-check-dollar"></i>
                  <span>Daftar Pelunasan</span>
                </button>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a id="nav_item_pinjaman_lunas" class="collapse-item">Lunas</a>
                    <a id="nav_item_pinjaman_lunas" class="collapse-item">Belum Lunas</a>
                  </div>
                </div>
              </li>

              <!-- Divider -->
              <hr class="sidebar-divider" />

              <!-- Sidebar Toggler (Sidebar) -->
              <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
              </div>
            </ul>
            <!-- End of Sidebar -->

            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
              <!-- Main Content -->
              <div id="content">
                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <!-- Sidebar Toggle (Topbar) -->
                  <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                  </button>

                  <!-- Topbar Navbar -->
                  <ul class="navbar-nav ml-auto">
                    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                    <li class="nav-item dropdown no-arrow d-sm-none">
                      <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-search fa-fw"></i>
                      </a>
                      <!-- Dropdown - Messages -->
                      <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <form class="form-inline mr-auto w-100 navbar-search">
                          <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="button">
                                <i class="fas fa-search fa-sm"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>

                    <!-- Nav Item - Alerts -->
                    <li class="nav-item dropdown no-arrow mx-1">
                      <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bell fa-fw"></i>
                        <!-- Counter - Alerts -->
                        <span class="badge badge-danger badge-counter">1</span>
                      </a>
                      <!-- Dropdown - Alerts -->
                      <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                        <h6 class="dropdown-header">Notification</h6>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <div class="mr-3">
                            <div class="icon-circle bg-primary">
                              <i class="fas fa-file-alt text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div class="small text-gray-500">12 Juni 2023</div>
                            <span class="font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sapiente!</span>
                          </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                      </div>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                    <!-- Nav Item - User Information -->
                    <li class="nav-item dropdown no-arrow">
                      <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                        <img class="img-profile rounded-circle" src="../image/img-bootstrap/undraw_profile.svg" />
                      </a>
                      <!-- Dropdown - User Information -->
                      <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#profileModal">
                          <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          Profile
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                          <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        `;
  }
}

customElements.define('profile-header', ProfileHeaderCreator);
