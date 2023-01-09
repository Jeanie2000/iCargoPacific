<script>
export default{
    name: 'signup',
    components: {
    }
}
</script>

<template>
<div class="partnership" id="partner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../assets/img/signup.png"
            alt="Login image"
            class="w-100 vh-100"
            style="object-fit: cover; object-position: center"
          />
        </div>
        <div class="col-sm-6 text-black">
          <div
            class="d-flex align-items-center h-custom-4 px-5 ms-xl-5 mt-5 pt-5 pt-xl-5 mt-xl-n4"
          >
            <form style="width: 23rem">
              <div class="heading my-3">
                <h4 class="fw-bold">
                  Welcome to<span style="color: #0d6efd"> iCargo</span>
                  <span style="color: #ffc800"> Pacific</span>
                </h4>
                <h6 style="font-weight: 500">Get started for free!</h6>
                <h5 class="fw-bold" style="font-size: 15px">Sign up as</h5>
              </div>

              <div class="form-outline mb-4">
                <button
                  type="button-group"
                  class="btn btn-warning btn-md m-2 text-white rounded-pill"
                  style="width: 20rem"
                >
                  <router-link
                    class="route text-decoration-none text-white fw-bold"
                    to="/customer-signup"
                    >Customer</router-link
                  >
                </button>
              </div>

              <div class="form-outline mb-4">
                <button
                  type="button-group"
                  class="btn btn-warning btn-md m-2 text-white rounded-pill"
                  style="width: 20rem"
                >
                  <router-link
                    class="route text-decoration-none text-white fw-bold"
                    to="/merchant-signup"
                    >Merchant</router-link
                  >
                </button>
              </div>

              <div class="form-outline mb-4">
                <button
                  type="button-group"
                  class="btn btn-warning btn-md m-2 text-white rounded-pill"
                  style="width: 20rem"
                >
                  <router-link
                    class="route text-decoration-none text-white fw-bold"
                    to="/partner-signup"
                    >Partner</router-link
                  >
                </button>
              </div>

              <div class="pt-1 mb-2 d-flex justify-content-center">
                <p class="me-1"  style="font-size: 14px; font-weight: 600;">Already have an account?</p>
                <router-link
                  class="nav text-warning text-decoration-none fw-bold" style="font-size: 14px; font-weight: 600;"
                  to="/signin"
                  exact
                >
                  Sign in</router-link
                >
              </div>

              <div class="form-outline mb-4 pt-1 d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-light shadow btn-md m-2 text-white px-4 rounded-4 border"
                >
                  <router-link
                    class="route text-decoration-none text-dark fw-bold"
                    to="/"
                    >Back</router-link
                  >
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<style>

</style>