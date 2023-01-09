<template>
<header>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <router-link style="font-size: 15px;" to="/dashboard" class="list-group-item list-group-item-action fw-bold py-2 ripple bg-white text-secondary shadow  mt-3 mb-2">
            <i  class="fas fa-chart-area fa-fw me-3"></i><span>Dashboard</span>
          </router-link>
          
        <!----Order section-->
          <router-link  to="/order" style="background-color: gray; font-size: 15px;"  class="list-group-item list-group-item-action fw-bold py-2 bg-white text-secondary shadow"><i
              class="fas fa-boxes-stacked fa-fw me-3"></i><span>Orders</span></router-link>
         <!----orderlist-->
          <router-link style="font-size: 13px;" to="/accepted" class="list-group-item text-center list-group-item-action py-2 ripple">
            <span>Available Orders</span></router-link>

          <router-link style="font-size: 13px;" to="/track-orders" class="list-group-item text-center list-group-item-action py-2 ripple">
           <span>Track Orders</span></router-link>

          <router-link style="font-size: 13px;" to="/transaction" class="list-group-item text-center list-group-item-action py-2 ripple">
             <span>Transaction History</span></router-link>
        <!----orderlist-->


        <!----Shipment section-->
          <router-link to="/shipment" style="font-size: 15px;"  class="list-group-item list-group-item-action py-2 mt-2 shadow bg-white text-secondary fw-bold"><i
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
            <ul class="dropdown-menu dropdown-menu-end bg-transparent border-0" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link class="dropdown-item active ripple" to="/userprofile">My profile</router-link></li>
              <li><router-link class="dropdown-item ripple" to="/signout">Sign out</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>

  <main style="margin-top: 35px;">
    <div class="container pt-5">
        <div class="main-header mt-4 px-1 text-primary mb-2 fw-bold" style="font-size: 25px;">
          <i class="fas fa-user fa-fw me-2"></i><span>Profile</span>

    <!-----User Content-->
    <div class="container rounded bg-white mt-2 mb-2 bg-light shadow shadow-lg rounded-5">
    <div class="row">
        <div class="col-md-3 border border-right rounded-5 shadow">
            <div class="d-flex flex-column align-items-center text-center p-3 py-3 text-muted">
              <img class="rounded-circle mt-2" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
              <span class="text-secondary" style="font-size: 18px;">Username</span>
              <span class="text-secondary small" style="font-size: 13px; font-weight: 200;">username2gmail.com</span>
              <span class="text-secondary fw-bold mt-3" style="font-size: 15px;">All-Goods Logistics Co.</span>
              <span class="text-secondary mt-3" style="font-size: 13px; font-weight: 200;">
                Hello I am a Representative at All-Goods Logistics Co.</span>
                <div class="mt-4 text-center"><button class="btn btn-warning btn-sm fw-bold text-white profile-button rounded rounded-5 px-3 shadow shadow-md" type="button">Get Verified</button></div>
              <span> </span></div>
        </div>
        <div class="col-sm-8 border-right rounded-5 ms-auto mx-auto mt-5 px-1">
            <div class="p-3 py-1">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <h4 class="text-right text-secondary fw-bold" style="font-size: 18px;">User Details</h4>
                    <button class="btn btn-warning btn-sm fw-bold text-white profile-button shadow shadow-md rounded rounded-5"
                    data-bs-toggle="modal" data-bs-target="#userdetailsModal" type="button">Edit Profile</button>
                  </div>
                  </div>
          <!---user details-->
                <div class="row mt-2">
                  <div class="col-lg-12">
                <div class="card border border-0 mb-4">
                  <div class="card-body text-muted" style="font-size: 17px;">

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-4" style="font-weight: 500;">Username:</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="mb-4"  style="font-weight: 300;">Johnatan</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-4"  style="font-weight: 500;" >About:</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="mb-4"  style="font-weight: 300;">
                          Hello I am a Representative at All-Goods Logistics Co.
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-4"  style="font-weight: 500;">Contact</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="mb-4" style="font-weight: 300;">(+63)912-345-6789</p>
                      </div>
                    </div>
                   
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-4"  style="font-weight: 500;">Email</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="mb-4" style="font-weight: 300;">example@example.com</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-4"  style="font-weight: 500;">Company</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="mb-4" style="font-weight: 300;">
                          All-Goods Logistics Co.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                </div>
      <!--Grid column-->
                </div>
        </div>
  
    </div>
</div>
</div>
</div>
  </main>
<!----Modal-->
<section class="user-details">
  <userdetailsmodal/>
</section>

</template>

<script>
import userdetailsmodal from '../components/UserDetailsModal.vue'

export default{
    name: 'userprofile',
    components:{
      userdetailsmodal,
    }
}
</script>

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