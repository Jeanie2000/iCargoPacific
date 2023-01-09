<script>

export default{
    name: 'footer'
}
</script>

<template>
 <footer class="text-white text-center text-lg-start" style="background-color: #200f21;">
  <!-- Grid container -->
  <div class="container py-5 mx-auto">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
        <ul class="text-start">
          <h5 class="text-warning fw-bold mb-4" style="font-size: 20px;">Contact Us</h5>
              <p class="text-white" style="font-size: 15px;">
                <span class="fas fa-map-marker-alt me-2"></span>
                1616 Celadon Park, Manila, Philippines
              </p>
              <p class="text-white" style="font-size: 15px;">
              <span class="fas fa-phone me-2"></span>
              (+63)912-345-6789
            </p>
              <p class="text-white" style="font-size: 15px;">
                <span class="fas fa-envelope me-2"></span>
                info@icargo.ph
              </p>
            </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <ul class="text-start">
          <h5 class="text-warning fw-bold mb-3" style="font-size: 20px;">Learn More</h5>
              <p class="text-white" style="font-size: 15px;">
                <span class="fas fa-caret-right me-2"></span>Home
              </p>
              <p class="text-white" style="font-size: 15px;">
              <span class="fas fa-caret-right me-2"></span>About Us
            </p> 
              <p class="text-white" style="font-size: 15px;">
                <span class="fas fa-caret-right me-2"></span>Services
              </p>
              <p class="text-white" style="font-size: 15px;">
                <span class="fas fa-caret-right me-2"></span>Contact Us
              </p>
            </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="text-warning fw-bold mb-3" style="font-size: 20px;">Subscribe to our Newsletter</h5>
        <p class="fw-bold">Let's GO beyond logistics, make the world go round and revolutionize business.</p>
        <div class="input-group mb-3">
          <input type="email" class="form-control form-control-md border-0 rounded-5 shadow px-3" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2">
          <router-link to="/signup" 
          class="input-group-text text-decoration-none text-white fw-bold px-4 rounded-4 border-0 pe-3 shadow position-absolute top-50 end-0 translate-middle-y" id="basic-addon2"
          style="background-color: #144272;">Sign Up</router-link>
        </div>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-start p-3 text-warning fw-bold px-5 border-top" style="background-color: rgba(0, 0, 0, 0.2);">
    © iCargo Pacific.
    <a class="text-white fw-bold text-decoration-none">All Rights Reserved.</a>
  </div>
  <!-- Copyright -->
</footer>
</template>

<style>
</style>
