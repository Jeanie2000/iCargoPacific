<script>

import SubNav from '../components/SubNav.vue';



export default{
    name: 'instant',
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
            <router-link class="nav-link  me-3 fw-bold" to="/track">Track</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold active text-white" to="/instant">Instant Quote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold" to="/signin">Sign In</router-link>
          </li>
       
        <li class="nav-item" role="search">
          <button
            class="btn btn-outline-warning btn-sm shadow-md rounded-3"
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


<!-- Instant-->

<section class="instant-page" id="instant">

<div class="card mx-1 mx-sm-1 shadow-5-strong" style="
      background-color: #fff; width: 45rem; border-radius: 5rem;">
  <div class="card-body py-2 px-sm-2">

    <div class="row d-flex justify-content-center">
      <div class="col-lg-8">
        <h3 style="font-size: 13px;" class="text-primary fw-bold text-center pt-3">INSTANT QUOTE</h3>
        <h2 class="fw-bold mb-5 text-center" style="font-size: 20px;">Find the best logistics partner for you.</h2>
        
          <!-- Pickup address -->
          <label style="font-size: 13px;" class="form-label fw-bold text-muted mb-3" for="form3Example3">Pickup Address</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control  form-control-md rounded-pill shadow"  aria-describedby="addon-wrapping" aria-label="number" />
            <span class="input-group-text input-group-text border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y" id="addon-wrapping">
              <i style="font-size: 15px; color: #222;" class="fa-solid fa-location-crosshairs" aria-hidden="true"></i></span>
          </div>

          <!-- Destination Address -->
          <label style="font-size: 13px;" class="form-label fw-bold text-muted mb-3" for="form3Example3">Destination Address</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control  form-control-md rounded-pill shadow"  aria-describedby="addon-wrapping" aria-label="number" />
            <span class="input-group-text input-group-text border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y" id="addon-wrapping">
              <i style="font-size: 15px; color: #222;" class="fa-solid fa-location-crosshairs" aria-hidden="true"></i></span>
          </div>
          
           <!-- Submit button -->
           <div class="row d-flex justify-content-center">
           <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item me-3" role="presentation">
              <a class="nav-link active text-white fw-bold bg-warning shadow" id="wholeVehicle" data-mdb-toggle="pill" href="#pills-whole" role="tab"
                aria-controls="pills-login" aria-selected="true">Whole Vehicle</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link text-dark shadow fw-bold" style="background-color:#fff;" id="partialLoad" data-mdb-toggle="pill" href="#pills-partial" role="tab"
                aria-controls="pills-register" aria-selected="false">Partial Load</a>
            </li>
          </ul>
          </div>
            <!----Dropdown button-->
            <div class="input-group mb-3">
              <input type="text" class="form-control form-control-md dropdown-toggle shadow rounded-pill" placeholder="Type of Vehicle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Text input with dropdown button">
              <button class="btn btn-outline-secondary  border-0  bg-transparent dropdown-toggle btn-md position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Cargo</a></li>
                <li><a class="dropdown-item" href="#">Cargo</a></li>
                <li><a class="dropdown-item" href="#">Cargo</a></li>
              </ul>
            </div>
            </div>

          <!----Button-->
          <div class="text-center text-sm-center mt-3 pt-2 mb-3">
            <button type="submit" id="price" class="btn btn-primary fw-bold btn-md px-5 shadow"
            data-bs-toggle="modal" data-bs-target="#instantModal"
            style="padding-left: 2.5rem; padding-right: 2.5rem;">Get Price</button>
          </div>
      </div>
    </div>
  </div>
</section>
<!-- Instant  -->

<!---Instant modal-->
<div class="modal fade" id="instantModal">
<div class="modal-dialog modal-md">
<div class="modal-content">

  <!---Modal body in Track-->
  <div class="modal-body">
    <div class="card">
      <div class="card-body">
        <div class="container text-center">
          <p class="mx-5 text-center fw-bold text-primary" style="font-size: 15px;">YOUR ECONOMY PRICE</p>
          <p class="my-2 mx-5 text-center fw-bold text-black" style="font-size: 30px;">Php 665.00</p>

        <!---- Pickup row-->
            <div class="row justify-content-around">
            <div class="col-4 fw-bold">
              <p>Pickup:</p>
            </div>
            <div class="col-8 text-justify text-muted">
              Manila, Metro Manila
            </div>
          </div>
      <!---- Destination  row-->
          <div class="row justify-content-around">
            <div class="col-4 fw-bold">
              <p>Destination:</p>
            </div>
            <div class="col-8 text-justify text-muted">
              <p>Calatagan, Batangas
              </p>
            </div>
          </div>
      <!---- Distance  row-->
          <div class="row justify-content-around">
            <div class="col-4 fw-bold">
              <p>Distance:</p>
            </div>
            <div class="col-8 text-justify text-muted">
              <p>86 km
              </p>
            </div>
          </div>
       <!---- Duration  row-->
           <div class="row justify-content-around">
            <div class="col-4 fw-bold">
              <p>Duration:</p>
            </div>
            <div class="col-8 text-justify text-muted">
              <p>4h 45m
              </p>
            </div>
          </div>
       <!---- Vechicle Type  row-->
           <div class="row justify-content-around">
            <div class="col-4 fw-bold">
              <p>Vehicle type:</p>
            </div>
            <div class="col-8 text-justify text-muted">
              <p>L300
              </p>
            </div>
          </div>
          <!---- Inclusions row-->
          <div class="row justify-content-around">
            <div class="col-4 fw-bold">
              <p>Inclusions:</p>
            </div>
            <div class="col-8 text-justify text-muted">
              <p>Driver, fuel, load/unload, insurance
              </p>
            </div>
          </div>
          <!---- Available row-->
          <div class="row justify-content-around">
            <div class="col-4 fw-bold">
              <p>Available:</p>
            </div>
            <div class="col-8 text-justify text-muted">
              <p>Earliest pickup within an hour. Later pickup times are also available.
              </p>
            </div>
          </div>
          <div class="row text-center">
            <p class="text-danger fw-bold">Your driver must receive your advance approval
              to reimburse tolls and parking.
            </p>
          </div>

           <!----Button-->
           <div class="text-center text-sm-center mt-4 pt-2 mb-4">
            <!----close button-->
            <button type="button" data-bs-dismiss="modal" class="btn btn-white text-black fw-bold btn-sm rounded-pill px-2 shadow me-4"
            style="padding-left: 1.5rem; padding-right: 1.5rem;">Close</button>
            <!----share button-->
            <button type="button" class="btn btn-white text-black fw-bold btn-sm  rounded-pill px-2 shadow me-4"
            style="padding-left: 1.5rem; padding-right: 1.5rem;">Share</button>
            <!---Book now button-->
            <button type="button" class="btn btn-primary fw-bold btn-sm px-2  rounded-pill shadow me-4"
            style="padding-left: 1.5rem; padding-right: 1.5rem;">Book Now</button>
          </div>
  </div>
</div>
</div>
  </div>
  

</div>
</div>
</div>
<!---Instant modal-->




</template>


<style>

section#instant {
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