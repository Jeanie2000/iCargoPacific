<script>
export default{
    name: 'partner-signin',
    components: {
    }
}
</script>

<template>

<div class="vh-80" id="customer-signin">
    <div class="container-fluid">
      <div style="background-color: #f8f9fa" class="row">
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../assets/img/register2.jpg"
            alt="Login image"
            class="w-100 vh-100 img-fluid"
            style="object-fit: cover; object-position: center"
          />
        </div>

        <div class="col-sm-6 text-black bg-white">
          <div
            class="d-flex align-items-center h-custom-2 px-5 ms-xl-5 mt-5 pt-5 pt-xl-2 mt-xl-n3"
          >
  
            <form class="align-items-center" style="width: 23rem">
              <div class="heading my-2">
                <h4 class="fw-bold">
                  Sign in as an<span style="color: #0d6efd"> iCargo</span>
                  <span style="color: #ffc800"> Partner</span>
                </h4>
                <h5 style="font-size: 14px; font-weight: 600;" class="mt-3">
                  Enter your details below
                </h5>
                <p v-if="errMsg">{{ errMsg }}</p>
              </div>

              <div class="row mb-2">
                <div class="col">
                  <div class="form-outline mb-4">
                    <label style="font-size: 14px; font-weight: 600;" class="form-label" for="form3Example3">Email</label>
                    <input style="width: 20rem; background-color:rgba(165, 183, 233, 0.51);"  type="email"  v-model="email"
                      id="form3Example3"  class="form-control form-control-md rounded-5 shadow shadow-sm border"/>
                  </div>

                  <div class="form-outline mb-3">
                    <label style="font-size: 14px; font-weight: 600;" class="form-label" for="formTextExample2"
                      >Password</label >
                    <input
                      style="width: 20rem; background-color:rgba(165, 183, 233, 0.51); "
                      type="password"
                      v-model="password"
                      id="form3Example3"
                      class="form-control form-control-md rounded-5 shadow-md shadow shadow-sm border"
                    />
                  </div>

                  <div class="pt-1 mb-4 d-flex">
                    <router-link style="font-size: 14px; font-weight: 600;" href="#!" class="text-body text-decoration-none"
                        to="/ForgotPassword">Forgot Password?</router-link>
                  </div>

                  <div class="pt-1 mb-3 d-flex justify-content-center">
                    <div class="btn-group me-2 top-0">
                      <router-link
                        style="background-color: white"
                        class="btn btn-primary btn-sm btn-block text-dark shadow rounded-4 px-4 border"
                        href="signin.html" role="button" to="/Signin">Back</router-link>
                    </div>

                    <div class="btn-group me-2 top-0">
                       <a
                        @click="signIn"
                        class="btn btn-primary btn-sm btn-block shadow rounded-4 px-4 border border-2 text-decoration-none text-white"
                        role="button"
                        >Sign in</a
                      >
                    </div>
                  </div>

                  <div class="mt-3 me-3">
                    <div class="pt-1 mb-2 d-flex justify-content-center">
                      <h6 class="text-body fw-light mb-2 fs-6"
                       style="font-size: 14px; font-weight: 600;">Login with:</h6>
                    </div>

                    <div class="pt-1 mb-4 d-flex justify-content-center">
                      <div class="btn-group me-4 top-0 ">
                        <a
                          class="btn btn-secondary btn-md btn-block px-3 rounded-5 shadow-md shadow shadow-sm border"
                          href="signin.html"
                          role="button"
                          ><i class="fa-brands fa-facebook me-2"></i>Facebook</a
                        >
                      </div>

                      <div class="btn-group  top-0">
                        <a
                          @click="signInWithGoogle"
                          class="btn btn-secondary btn-md btn-block px-3 rounded-5 shadow-md shadow shadow-sm border"
                          href="signin.html"
                          role="button"
                          ><i class="fa-brands fa-google me-2"></i>Google</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="pt-1 mb-4 d-flex justify-content-center">
                    <p class="me-2" style="font-size: 14px; font-weight: 600;">Don't have an account yet?</p>
                    <router-link
                      class="nav text-warning fw-bold text-decoration-none " style="font-size: 15px; font-weight: 500;"
                      to="/signup"
                      >Sign up</router-link
                    >
                  </div>
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