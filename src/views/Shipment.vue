<script>

export default{
    name: 'shipment',
}
</script>

<template>
 <header>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <router-link style="font-size: 15px;" to="/dashboard" class="list-group-item list-group-item-action bg-white text-secondary fw-bold py-2 ripple  mt-3 mb-2">
            <i  class="fas fa-chart-area fa-fw me-3"></i><span>Dashboard</span>
          </router-link>
          
        <!----Order section-->
          <router-link  to="/order" style="font-size: 15px;"  class="list-group-item list-group-item-action bg-white text-secondary fw-bold py-2 ripple shadow"><i
              class="fas fa-boxes-stacked fa-fw me-3"></i><span>Orders</span></router-link>
         <!----orderlist-->
          <router-link style="font-size: 13px;" to="/accepted" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Accepted Orders</span></router-link>

          <router-link style="font-size: 13px;" to="/track-orders" class="list-group-item text-center list-group-item-action py-2 ripple">
           <span>Track Orders</span></router-link>

          <router-link style="font-size: 13px;" to="/transaction" class="list-group-item text-center list-group-item-action py-2 ripple">
             <span>Transaction History</span></router-link>
        <!----orderlist-->


        <!----Shipment section-->
          <router-link to="/shipment" style="font-size: 15px;"  class="list-group-item list-group-item-action py-2 mt-2 shadow ripple active fw-bold"><i
              class="fas fa-truck-fast fa-fw me-3"></i><span>Shipments</span></router-link>
      <!----Shiplist-->
          <router-link style="font-size: 13px;" to="/intransit" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>In-Transit</span></router-link>
          <router-link style="font-size: 13px;" to="pending" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Pending</span></router-link>
          <router-link style="font-size: 13px;" to="/delivered" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Delivered</span></router-link>
          <router-link style="font-size: 13px;" to="/cancelled" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Cancelled</span></router-link>
       <!----Shiplist-->

        <!----Fleet section-->
        <router-link to="/fleet" style=" font-size: 15px;"  class="list-group-item list-group-item-action py-2  mt-2 shadowbg-white text-secondary fw-bold"><i
              class="fas fa-plane-departure fa-fw me-3"></i><span>Fleet Management</span></router-link>
      <!----fleetlist-->
          <router-link style="font-size: 13px;" to="/staffs" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Staffs</span></router-link>
          <router-link style="font-size: 13px;" to="/vehicles" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Vehicles</span></router-link>
          <router-link style="font-size: 13px;" to="/serviceable" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Serviceable Area</span></router-link>
       <!----fleetlist-->

       <!----Fleet section-->
       <router-link to="/billandcharge" style=" font-size: 15px;"  class="list-group-item list-group-item-action py-2 mt-s mb-2 shadow bg-white text-secondary fw-bold"><i
              class="fas fa-bars-progress fa-fw me-3"></i><span>Billing and Charges</span></router-link>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white shadow shadow-md fixed-top">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <img src="../assets/img/icargologo.png" height="50" weight="50" alt="" loading="lazy" />
        </a>
        <!-- Search form -->
        <h6 class="d-none d-md-flex input-group w-auto my-auto text-primary fw-bold fs-5 me-2">
          iCargo <span class=" text-warning "> Pacific</span>
        </h6>

        <!-- Right links -->
        <ul class="navbar-nav ms-auto d-flex flex-row">
          <!-- Notification dropdown -->
          <button style="font-size: 13px;" class="btn btn-warning btn-sm fw-bold text-white profile-button shadow shadow-md rounded px-4 rounded-5" type="button">Help</button>
          <!-- Avatar -->
          <li class="nav-item dropdown me-5">
            <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
              id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img (25).jpg" class="rounded-circle" height="30"
                alt="" loading="lazy" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end bg-light border-0 shadow mt-4 rounded-3 px-3" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link class="dropdown-item ripple rounded-4" to="/userprofile">My profile</router-link></li>
              <li><router-link class="dropdown-item ripple rounded-4" to="/signout">Sign out</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
  <!--Main Navigation-->


<!--Main layout-->
<main style="margin-top: 35px;">
    <div class="container pt-4">
        <div class="main-header mt-5 px-5 text-primary mb-5" style="font-size: 25px; font-weight: 700;">
            <i class="fas fa-boxes-stacked fa-fw me-2"></i><span>Shipment</span></div>

<!-----Overview content-->

<!----input search-->
              <div class="input-group bg-transparent">
                  <span class="mt-2" style="padding-left: 3rem; font-size: 13px;">Here is all your shipments</span>
                  <!----button--> 
                  <div class="d-flex flex-row justify-content-end dropdown position-absolute top-0 end-0">
                  <button style="font-size: 13px;" class=" btn btn-sm btn-warning text-dark dropdown-toggle btn-white me-4 mb-0"
                  data-bs-toggle="dropdown" aria-expanded="false"
                  >Sort By</button>
                  <ul class="dropdown-menu"  style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">In-Transit</a></li>
                    <li><a class="dropdown-item" href="#">Pending</a></li>
                    <li><a class="dropdown-item" href="#">Delivered</a></li>
                    <li><a class="dropdown-item" href="#">Cancelled</a></li>
                </ul>
                </div>
                </div>

 <!----Recent order tables-->
 <div class="row" id="table" style="padding-top:1%; padding-bottom:10%; padding-left:2%; padding-right:2%;">
            <div class="col-md-12 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table
                      id="example"
                      class="table table-striped  table-bordered data-table"
                      style="width: 100%"
                    >
                      <thead class="text-muted text-decoration-underline"  style="font-size: 13px;">
                        <tr style="font-size: 13px;" class="text-center">
                          <th>Order Number</th>
                          <th>Date of Delivery</th>
                          <th>Sender</th>
                          <th>Receipient</th>
                          <th >Pick-up Point</th>
                          <th>Drop-Off Point</th>
                          <th>Cargo Type</th>
                          <th>Cargo Service</th>
                          <th class="input-group">
                          <span>Status</span>
                              <span class="input-group-text input-group-text border-0 bg-transparent text-muted" id="addon-wrapping">
                              <i style="font-size: 13px; color: #222;" class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></span>
                          </th>
                        </tr>
                      </thead>
                      <tbody  style="font-size: 13px;" class="text-center">
                        <tr>
                          <td>12345678</td>
                          <td>Jeanie Allanza</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td></td>
                          <td></td>
                         
                          </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Hershey Mae Dungao</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                         <td></td>
                         <td></td>
                         
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Bk Pecho</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td></td>
                          <td></td>
                         
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Ash Sanchez</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td></td>
                          <td></td>
                        
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Smol Kona</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td></td>
                          <td></td>
                         
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Jhudiel Suelto</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td></td>
                          <td></td>
                         
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Gil Pangan</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td></td>
                          <td></td>
                        
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Kischella Mae David</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td></td>
                          <td></td>
                          
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </main>
  <!--Main layout-->


</template>


<style>

section{
    padding: 2rem;
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
  overflow:auto;
  transition:all 0.3s ;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

</style>