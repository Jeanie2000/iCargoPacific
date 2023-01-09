<script>
export default{
    name: 'partnership',
    components: {
       
       
    }
}
</script>

<template>
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
            <router-link class="nav-link me-3 fw-bold ripple" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3 fw-bold ripple" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold active text-white" to="/partnership">Partnership</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold ripple" to="/track">Track</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold ripple" to="/instant">Instant Quote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold ripple" to="/signin">Sign In</router-link>
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

 <!----Partnership-->
 <section class="partnership py-5 " id="partner" style="background-color: #2a3990">
    <div class="container text-center py-5 py-md-6" style="height: 90vh;">
      <div
        class="lc-block card border-0 text-center rounded p-4 p-lg-6"
        style="background-color: #2a3990"
      >
        <div class="row card-body mb-3 mb-lg-4">
          <div class="col-xl-11 col-xxl-9 mx-auto">
            <div class="lc-block mb-4">
              <div editable="rich">
                <p class="text-white">PARTNERSHIP</p>
              </div>
            </div>
            <div class="lc-block">
              <div editable="rich">
                <h3 class="text-white fw-bold display-6">
                  Become Our Partner Today
                </h3>
                <p class="text-white">
                  The satisfaction and trust of your customers with easy-to-use
                  yet powerful logistics from iCargo Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="lc-block">
          <a class="btn" role="button">
            <router-link
              to="/signup"
              class="btn btn-outline-light btn-md fw-bold rounded-3 px-3"
              >Sign Up Now</router-link
            ></a
          >
        </div>
      </div>
    </div>
</section>




</template>


<style>
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