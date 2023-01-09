<script>
export default{
    name: 'merchant-signup',
    components: {
    }
}
</script>

<template>
<!-- Sign up-->
<div class="vh-80" id="customer-signup">
    <div class="container-fluid">
      <p v-if="errMsg">{{ errMsg }}</p>
      <div style="background-color: #f8f9fa" class="row">
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../assets/img/register.jpg"
            alt="Login image"
            class="w-100 vh-100 img-fluid"
            style="object-fit: cover; object-position: center"
          />
        </div>

        <div class="col-sm-6 text-black bg-white">
          <div
            class="d-flex align-items-center h-custom-2 px-4 mb-4 mx-auto ms-xl-5 ms-auto mt-2 pt-2 pt-xl-3 mt-xl-3"
          >
            <form style="width: 30rem">
              <div class="heading">
                <h4 class="d-flex justify-content-center fw-bold">
                  <span style="color: #0d6efd" class="me-2">Be an iCargo</span>
                  <span style="color: #ffc800" class="me-2"> Merchant</span>
                  <span style="color: #0d6efd" class="me-2"> today!</span>
                </h4>
                <h6 style="font-weight: 700" class="text-center mb-1">
                  LET'S COLLABORATE!
                </h6>
                <h5 style="font-size: 13px; font-weight: 600" class="mb-3 text-center">
                  Get in touch with us to become our logistics partner!
                </h5>
                <h5 style="font-size: 14px;" class="fw-bold">
                  Account details
                </h5>
              </div>

              <div class="row mb-2">
                <div class="col"  style="font-size: 12px; font-weight: 600;">
                  <div class="form-outline">
                    <label class="form-label form" for="form3Example1"
                      >First name</label
                    >
                    <input
                      style="width: 10rem; background-color:rgba(165, 183, 233, 0.51);"
                      type="text"
                      id="form3Example1"
                      class="form-control form-control-sm fs-6 rounded-4 shadow shadow-sm"
                      v-model="firstName"
                    />
                  </div>
                </div>
                <div class="col"  style="font-size: 12px; font-weight: 600;">
                  <div class="form-outline">
                    <label class="form-label" for="form3Example2"
                      >Last name</label
                    >
                    <input
                      style="width: 9rem; background-color:rgba(165, 183, 233, 0.51);"
                      type="text"
                      id="form3Example2"
                      class="form-control form-control-sm fs-6 rounded-4 shadow shadow-sm"
                      v-model="lastName"
                    />
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4" style="font-size: 12px; font-weight: 600;">
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
                <input
                  style="width: 25rem; background-color:rgba(165, 183, 233, 0.51);"
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-sm rounded-4 shadow shadow-sm"
                  v-model="email"
                />
              </div>

              <div class="form-outline mb-4" style="font-size: 12px; font-weight: 600;">
                <label class="form-label" for="typePhone">Contact Number</label>
                <input
                  style="width: 25rem;  background-color:rgba(165, 183, 233, 0.51);"
                  type="tel"
                  id="typePhone"
                  class="form-control form-control-sm rounded-4 shadow shadow-sm"
                  v-model="contact"
                />
              </div>

              <div class="form-outline mb-4" style="font-size: 12px; font-weight: 600;">
                <label class="form-label" for="formTextExample2"
                  >Preferred Password</label
                >
                <input
                  style="width: 25rem;  background-color:rgba(165, 183, 233, 0.51);"
                  type="password"
                  id="formTextExample2"
                  class="form-control form-control-md rounded-4 shadow shadow-sm"
                  aria-describedby="textExample2"
                  v-model="password"
                />
              </div>

              <div class="form-outline mb-2" style="font-size: 12px; font-weight: 600;">
                <label class="form-label" for="formTextExample2"
                  >Re-type Preferred Password</label
                >
                <input
                  style="width: 25rem;  background-color:rgba(165, 183, 233, 0.51);"
                  type="password"
                  id="formTextExample2"
                  class="form-control form-control-md rounded-4 shadow shadow-sm"
                  aria-describedby="textExample2"
                />
              </div>

              <div class=" d-flex justify-content-center pt-2">
                <p class="me-1"  style="font-size: 14px; font-weight: 600;">Already have an account?</p>
                <router-link
                  class="nav text-warning text-decoration-none fw-bold" style="font-size: 14px; font-weight: 600;"
                  to="/signin"
                  exact
                >
                  Sign in</router-link
                >
              </div>

              <div class=" d-flex justify-content-center">
                <div class="btn-group me-2 top-0 mb-3">
                  <a
                    style="background-color: white"
                    class="btn btn- primary btn-sm btn-block text-dark shadow rounded border border-2 px-3 me-2"
                    role="button"
                    ><router-link to="/signup" class="text-decoration-none text-dark "
                      >Back</router-link
                    ></a
                  >
                </div>

                <div class="btn-group me-2 top-0 mb-3">
                  <a
                    class="btn btn-primary btn-sm btn-block text-white shadow rounded border border-2"
                    href="signin.html"
                    role="button"
                    
                      @click="signUp"
                      >Sign up
                    </a
                  >
                </div>
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