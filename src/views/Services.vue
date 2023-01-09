<script>
import SubNav from '../components/SubNav.vue';
import Footer from'../components/Footer.vue';

export default{
    name: 'services',
    components: {
        SubNav,
        Footer,
    }
}
</script>

<template>
  <main class="subnav">
    <SubNav/>
  </main>
   <!---Main Navbar-->
   <nav
    class="bottomnav navbar navbar-expand-lg navbar-primary sticky-top shadow bg-white"
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
            <router-link class="nav-link me-3 ripple fw-bold" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-3 fw-bold active text-white" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 ripple fw-bold" to="/partnership">Partnership</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold" to="/track">Track</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-3 fw-bold" to="/instant">Instant Quote</router-link>
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

 
  <!-- Services -->
  <section class="Servicespage py-5" id="services">
    <div class="container py-4 mb-4 min-vh-100">
      <div class="row d-flex justify-content-center">
        <div class="col-md-15">
          <div class="lc-block">
            <h6 editable="inline" class="fw-bold text-primary text-center fs-2 mb-3">
              <b>Our Solution for your business growth</b>
            </h6>
            <p editable="inline" class="fw-bold text-center">
              Thousand of merchants, millions of cargo deliveries.
            </p>
          </div>
          <!-- /lc-block -->

          <!---Carousel item-->
          <div id="carousels" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <!---Active -->
              <div class="carousel-item active">
                <!----Cards-->
                <div class="container d-flex align-items-center">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="lc-block">
                        <div class="card shadow-lg p-3 bg-white text-dark">
                          <img
                            class="card-img-top"
                            src="../assets/img/QR.png"
                          />
                          <div class="card-body text-center">
                            <h3
                              class="card-title mb-2"
                              editable="inline"
                              style="font-size: 15px"
                            >
                              QR Tracking and Monitoring
                            </h3>
                            <h4
                              class="card-subtitle"
                              editable="inline"
                              style="font-size: 10px"
                            >
                              The system will implement QR codes as the main
                              selling feature, allowing iCargo partners and
                              partner’s customers to easily make new shipments
                              and track their packages via smartphone in
                              real-time
                            </h4>
                          </div>
                        </div>
                      </div>
                      <!-- /lc-block -->
                    </div>
                    <!-- /col -->
                    <div class="col-md-4">
                      <div class="lc-block">
                        <div class="card shadow-lg p-3 bg-white text-dark">
                          <img
                            class="card-img-top"
                            src="../assets/img/waybill.png"
                          />
                          <div class="card-body text-center">
                            <h3
                              class="card-title mb-2"
                              editable="inline"
                              style="font-size: 15px"
                            >
                              Printing of Waybill
                            </h3>
                            <h4
                              class="card-subtitle"
                              editable="inline"
                              style="font-size: 10px"
                            >
                              The system will generate a shipment tracking
                              number, which the customer can use to track their
                              package. This number is also printed on the
                              shipping label, so when a customer requests a
                              pickup package, the courier can scan it to update
                              the shipment status.
                            </h4>
                          </div>
                        </div>
                      </div>
                      <!-- /lc-block -->
                    </div>
                    <!-- /col -->
                    <div class="col-md-4">
                      <div class="lc-block">
                        <div class="card shadow-lg p-3 bg-white text-dark">
                          <img
                            class="card-img-top"
                            src="../assets/img/price-quotation.png"
                          />
                          <div class="card-body text-center">
                            <h3
                              class="card-title mb-2"
                              editable="inline"
                              style="font-size: 15px"
                            >
                              Card title
                            </h3>
                            <h4
                              class="card-subtitle"
                              editable="inline"
                              style="font-size: 10px"
                            >
                              The system provides a quotation that gives a
                              customer an idea of the possible total price
                              depending on the sender and recipient location
                              provided.
                            </h4>
                          </div>
                        </div>
                      </div>
                      <!-- /lc-block -->
                    </div>
                    <!-- /col -->
                  </div>
                </div>
              </div>

              <!-- Left and right controls -->
              <a
                class="carousel-control-prev"
                href="#carousels"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousels"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>






<footer>
<Footer/>
</footer>
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