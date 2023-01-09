<script>

import SubNav from '../components/SubNav.vue';

export default{
    name: 'track',
    components: {
        SubNav,
       
    }
}
</script>

<template>
  <main class="subnav">
    <SubNav/>
  </main>
  <!---Main Navbar-->
  <nav
    class="bottomnav navbar navbar-expand-lg navbar-primary sticky-top bg-white shadow"
  >
    <div class="container">
      <div class="logo text-primary fw-bold fs-5">
        <img
          src="../assets/img/icargologo.png"
          width="70"
          height="70"
          class="me-2"
        />iCargo
        <span class="text-warning"> Pacific </span>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link me-3 fw-bold" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3 fw-bold" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold" to="/partnership">Partnership</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold active text-white" to="/track">Track</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold" to="/instant">Instant Quote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold" to="/signin">Sign In</router-link>
          </li>
       
        <li class="nav-item" role="search">
          <button
            class="btn btn-outline-warning btn-sm rounded-3 shadow-md"
            type="submit"
            @click.prevent="book"
          >
            Book Now
          </button>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  <!---Main Navbar-->

<!-- Track-->
<section class="track-page " id="track">

<div class="card mx-4 mx-md-5 shadow-5-strong" style="background-color: #fff; width: 45rem;  border-radius: 5rem;">
  <div class="card-body py-5 px-md-5">

    <div class="row d-flex justify-content-center">
      <div class="col-lg-8">
        <h3 style="font-size: 13px;" class="text-primary fw-bold text-center">TRACK YOUR PARCEL</h3>
        <h2 class="fw-bold mb-5 text-center" style="font-size: 18px;">Check your parcel's delivery details and status.</h2>
        
          <!-- Tracking input -->
          <label style="font-size: 13px;" class="form-label fw-bold text-muted mb-3" for="form3Example3">Enter Tracking Number</label>
          <div class="input-group">
            <input type="text" class="form-control form-control-md rounded-pill shadow"  aria-describedby="addon-wrapping" aria-label="number" />
            <span class="input-group-text input-group-text border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y" id="addon-wrapping">
              <i style="font-size: 15px; color: #222;" class="fa-solid fa-location-crosshairs" aria-hidden="true"></i></span>
          </div>

          <!----Button-->
          <div class="text-center text-sm-center mt-4 pt-2">
            <button type="button"  class="btn btn-primary shadow fw-bold btn-md px-5"
            data-bs-toggle="modal" data-bs-target="#trackModal"
            style="padding-left: 2.5rem; padding-right: 2.5rem;">Track</button>
          </div>
      </div>
      </div>
    </div>
  </div>
</section>
<!---Track-->

<!---Track modal-->
<section class="modal fade" id="trackModal">
 <div class="modal-dialog modal-md justify-content-center">
  <div class="modal-content">

    <!---Modal body in Track-->
    <div class="modal-body text-center">
    <div class="row d-flex">
  

      <!----User Profile Icon-->
      <div class="my-2 mx-1 justify-content-between">
        <!---Title-->
       <h5 class="text-primary fw-bold mb-4" style="font-size: 13px;">TRACK YOUR PARCEL</h5>

          <div class="row">
          <div class="col-md-8 col-xl-2">
            <i class="fa-solid fa-circle-user text-primary" style="width: 40px; height: 40px;"></i>
          </div>

     <!---Description-->
     <div class="col-md-8 col-sm-2">
      <p class="fw-bold">Driver's Name</p>
      <p>
        <span class="text-muted me-2">Delivery Partner: <span>AIGood Logistics></span></span>
      </p>
     </div>

     <div class="col-md-4">
            <span class="text-muted me-2">Tracking Number: <span class="text-primary fw-bold">XXX123-456-789></span></span>
          </div>
        </div>
     
    </div>
    
   <!---Timeline Description-->
    </div>
    </div>
    

  </div>
 </div>
</section>
<!---Track modal-->


</template>


<style>

section#track {
  background-image: url('../assets/img/bg.png');
  background-size: cover;
}

section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
}

nav .navbar-nav .nav-item .nav-link {
  padding: 5px 10px;
  text-align: center;
}

.nav-item .nav-link.active{
  color: #fff;
  background-color: rgba(5, 121, 199, 0.808);
  border-radius: 12px;
}

</style>