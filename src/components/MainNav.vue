<script>

export default{
    name: 'mainnav'
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
            <router-link class="nav-link me-3 fw-bold active text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3 ripple fw-bold" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 ripple fw-bold" to="/partnership">Partnership</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 ripple fw-bold" to="/track">Track</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 ripple fw-bold" to="/instant">Instant Quote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 ripple fw-bold" to="/signin">Sign In</router-link>
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
