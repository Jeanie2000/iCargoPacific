<template>
<section class="modal fade" id="seeDetails">
 <div class="modal-dialog modal-xl">
  <div class="modal-content rounded-5">


    <div class="modal-body text-muted">
          <div class="container mx-auto">
            <p class="fw-bold" style="font-size: 17px;">Order Details</p>


          <!---- First  row-->
        <div class="row align-items-start mt-2">
            <div class="col">
            <h6 style="font-size: 12px;">Order Number: <span class="fw-bold">4545544854</span></h6>
            </div>
            <div class="col">
                <h6 style="font-size: 12px;">Delivery Date: <span class="fw-bold">June, 12, 2022</span></h6>
            </div>
            <div class="col">
                <h6 style="font-size: 12px;">Mode of payment: <span class="fw-bold">COD</span></h6>
            </div>
            <div class="col ms-auto">
           <button style="font-size: 11px;" type="button" class="btn btn-sm btn-warning rounded-pill text-dark px-3">Total Amount: <span class="fw-bold">3,528 PHP</span> </button>
            </div>
        </div>

<!----modal content-->
<div class="row row-cols-1 row-cols-md-3 g-1 mt-3">

<!---First card-->
  <div class="col align-items-center">
    <div class="card h-80 rounded-5 shadow">
      <div class="card-body border border-primary rounded-5 px-4 shadow">
        <h6 class="card-subtitle mb-2 fw-bold text-primary mt-3">Sender Details</h6>
        <p class="card-text text-center">
            <span class="fw-bold h2" style="font-size: 20px;">Ronald Del Rosario</span><br>
        </p>
        <div class="row">
        <div class="col">
            <span  style="font-size: 13px;" class="text-muted">Pick-up Point</span><br>
        </div>
        </div>
        <span  style="font-size: 13px;" class="fa-solid fa-location-dot me-3 text-primary"></span>
        <span  style="font-size: 13px;"  class="fw-bold">2956 Gill Puyat Avenue, Makati City</span><br>
        <span  style="font-size: 13px;" class="fa-solid fa-phone me-3 text-primary"></span>
        <span  style="font-size: 13px;" class="fw-bold">09175485268</span><br>
        <p class="text-muted mt-3" style="font-size: 13px;">Notes: Near Gill Puyat Station</p>
      </div>
    </div>
  </div>

  <!---Second card-->
  <div class="col  align-items-center">
    <div class="card h-80 rounded-5 shadow">
      <div class="card-body border border-warning rounded-5 px-4 shadow">
        <h6 class="card-subtitle mb-2 fw-bold text-warning mt-3">Receipient Details</h6>
        <p class="card-text text-center">
            <span class="fw-bold h2" style="font-size: 20px;">Jocelyn Bonifacio</span><br>
        </p>
        <div class="row">
        <div class="col">
            <span  style="font-size: 13px;" class="text-muted">Drop-off Point</span><br>
        </div>
        </div>
        <span  style="font-size: 13px;" class="fa-solid fa-location-dot me-3 text-primary"></span>
        <span  style="font-size: 13px;"  class="fw-bold">2956 Gill Puyat Avenue, Makati City</span><br>
        <span  style="font-size: 13px;" class="fa-solid fa-phone me-3 text-primary"></span>
        <span  style="font-size: 13px;" class="fw-bold">09175485268</span><br>
        <p class="text-muted mt-3" style="font-size: 13px;">Notes:</p>
      </div>
    </div>
  </div>

  <!---Third card-->
  <div class="col mb-5">
    <div class="card h-80 border-0 mx-auto">
      <div class="card-body border-0 ">
        <h5 class="card-title fw-bold text-muted" style="font-size:13px;">Package Info</h5>
        <p class="card-text">

        <!---package info-->
          <div class="row">
        <!---column-->
            <div class="col">
                <span style="font-size: 11px;" class="fa-solid fa-map-location-dot me-1"></span>
                <span style="font-size: 11px;" class="text-muted">Total Distance:
                <span class="fw-bold">810 kilometers</span>
                </span><br>
            </div>
          </div>

        <!----row-->
        <div class="row">
        <!---column-->
            <div class="col g-1">
                <span style="font-size: 11px;" class="fa-solid fa-weight-scale me-1"></span>
                <span style="font-size: 11px;" class="text-muted">weight:
                <span class="fw-bold">87 kgs.</span>
                </span><br>
            </div>
            <div class="col g-1">
                <span style="font-size: 11px;" class="fa-solid fa-box me-1"></span>
                <span style="font-size: 11px;" class="text-muted">Cargo Type:
                <span class="fw-bold">Crafts</span>
                </span><br>
            </div>
          </div>
        <!----row-->

          <!----row-->
          <div class="row">
        <!---column-->
            <div class="col g-1">
                <span style="font-size: 11px;" class="fa-solid fa-sitemap me-1"></span>
                <span style="font-size: 11px;" class="text-muted">Dimension:
                <span class="fw-bold">3x5x2 feet</span>
                </span><br>
            </div>
            <div class="col g-1">
                <span style="font-size: 11px;" class="fa-solid fa-truck-ramp-box me-1"></span>
                <span style="font-size: 11px;" class="text-muted">Cargo Services:
                <span class="fw-bold">Truck</span>
                </span><br>
            </div>
          </div>

        <!----row-->
         <div class="row mt-3">
            <div class="col carousel slide" data-bs-touch="false" data-bs-interval="false" id="carouselExampleControlsNoTouching">

               <!----Carousel Image -->
               <div class="carousel-inner" style="max-width:264.67px; max-height: 148.98px !important;">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="../assets/img/freight-forwarding.png">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/img/parcel-image.png">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/img/header-bg.png">
                                    </div>

                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                 </div>
                    <!----Column-->
                    <!---button-->
                    <div class="col text-center mt-3">
                    <button style="font-size: 12px;" class="btn btn-sm text-white fw-bold rounded btn-danger shadow px-3 me-3" data-bs-dismiss="modal">Accept</button>
                    <button style="font-size: 12px;" class="btn btn-sm fw-bold rounded btn-warning text-white shadow px-3">Decline</button>
                        </div>
            </div>
         </div>
        <!----row-->

        </p>
      </div>
    </div>
  </div>

   <!----loading section-->
   <div class="row text-center mb-3 align-items-center position-absolute bottom-0 start-50 translate-middle-x">
           <div class="col px-2">
               <div class="loader-outer mb-3">
                <span style="font-size: 20px;" class="fa-solid fa-truck text-muted mt-4"></span>
                    <div class="loader">
                    <div class="icon-location me-4">
                        <span style="font-size: 20px;" class="fa-solid fa-location-dot text-primary"></span>
                    </div>
                    <span class="dot dot-1"></span>
                    <span class="dot dot-2"></span>
                    <span class="dot dot-3"></span>
                    <span class="dot dot-4"></span>
                    <span class="dot dot-5"></span>
                    <span class="dot dot-6"></span>
                    <span class="dot dot-7"></span>
                    <span class="dot dot-8 me-4"></span>
                    <div class="icon-location">
                        <span style="font-size: 20px;" class="fa-solid fa-location-dot text-warning"></span>
                    </div>
                    </div>
                </div>
           </div>
        </div>

<!---row end-->
</div>
          
<!----modal content-->
           </div>
          </div>
    </div>
 </div>
</section>
</template>

<script>

export default{
    name: 'orderdetailsmodal',
}
</script>

