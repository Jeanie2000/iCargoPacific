<script>
import SideNav from '../components/SideNav.vue';

export default{
    name: 'dashboard',
    components: {
        SideNav,
    }
}
</script>

<template>
<main>
    <SideNav/>
</main>


<!--Main layout-->
<main style="margin-top: 35px;">
    <div class="container pt-4">
        <div class="main-header mt-5 px-5 text-primary" style="font-size: 25px; font-weight: 700;">
            <i class="fas fa-chart-area fa-fw me-2 "></i><span>Dashboard</span></div>

<!-----Overview content-->
<section>
<div class="row">
    <!----Order Overview-->
          <div class=" col-lg-6 col-sm-12 col-12 mb-4">
            <div class="card shadow">
            
                <div class="card-header">
                  <span style="font-size: 15px;" class=" me-2"><i class="fa-solid fa-chart-simple me-2"></i>
                    Order Overview</span>
                  <div class="d-flex flex-row justify-content-end dropdown">
                  <button class=" btn btn-sm dropdown-toggle btn-primary shadow me-2"
                  data-bs-toggle="dropdown" aria-expanded="false"
                  >This Week</button>
                  <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                </div>
                <!----card body-->
              <div class="card-body mx-auto mx-sm-5">
                    <div class="d-flex justify-content-between p-sm-2">
                <div class="btn-group dropend d-flex flex-row p-0 m-0">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-4" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">4</p><span style="font-size: 13px;">Accepted Orders</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                <div class="btn-group dropend">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-4" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">12</p><span style="font-size: 13px;">Available Orders</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
               </div>
               </div>
              </div>
            </div>
        
<!----Order Overview-->

<!----Fleet Overview-->
          <div class="col-lg-6 col-sm-6 col-12 mb-3">
            <div class="card shadow">
                <div class="card-header">
                  <span style="font-size: 15px;" class=" me-2"><i class="fa-solid fa-plane-departure me-2"></i>
                    Fleet Overview</span>
                    <div class="d-flex flex-row justify-content-end dropdown">
                  <button class=" btn btn-sm dropdown-toggle btn-primary shadow me-2"
                  data-bs-toggle="dropdown" aria-expanded="false"
                  >This Week</button>
                  <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                </div>
                <!----card body-->
              <div class="card-body mx-auto mx-sm-5">
                    <div class="d-flex justify-content-between p-sm-2">
                <div class="btn-group dropend d-flex flex-row p-0 m-0">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-2" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">4</p><span style="font-size: 13px;">Drivers</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                <div class="btn-group dropend">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-3" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">12</p><span style="font-size: 13px;">Vehicles</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                <div class="btn-group dropend">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-2" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">11</p><span style="font-size: 13px;">Serviceable Area</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
               </div>
               </div>
              </div>
            </div>
        
<!----Fleet Overview-->
</div>
</section>

<!------Shipment Overview--->
<section>
  <div class="col-md-8 col-sm-12 mt-1 mb-4 mx-auto">
              <div class="card shadow">
                <div class="card-header">
                  <span style="font-size: 15px;" class=" me-2"><i class="fa-solid fa-truck me-2"></i>
                    Shipment Overview</span>
                    <div class="d-flex justify-content-end dropdown">
                  <button class=" btn btn-sm dropdown-toggle btn-primary shadow me-2"
                  data-bs-toggle="dropdown" aria-expanded="false"
                  >This Week</button>
                  <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a  class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                </div>
                <!----card body-->
              <div class="card-body mx-auto mx-sm-5">
                    <div class="d-flex justify-content-between p-sm-2">
                <div class="btn-group dropend d-flex flex-row p-0 m-0">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-2" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">4</p><span style="font-size: 13px;">In-Transit</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                <div class="btn-group dropend">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-3" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">12</p><span style="font-size: 13px;">Delivered</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a  class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a  class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a  class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                <div class="btn-group dropend">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-2" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">11</p><span style="font-size: 13px;">Pending</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a  class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a  class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a  class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
                <div class="btn-group dropend">
                <button type="button" class="btn btn-white border shadow dropdown-toggle p-3 justify-content-center me-2" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="fs-5 fw-bold">11</p><span style="font-size: 13px;">Cancelled</span>
                </button>
                <ul class="dropdown-menu" style="font-size: 13px;">
                    <li><a   class="dropdown-item" href="#">Dec 22, 2022</a></li>
                    <li><a  class="dropdown-item" href="#">Dec 15, 2022</a></li>
                    <li><a class="dropdown-item" href="#">Dec 10, 2022</a></li>
                </ul>
                </div>
               </div>
               </div>
              </div>
            </div>
</section>
<!------Shipment Overview--->
  
<!-----Overview-->


  <!----Recent order tables-->
  <div class="row" id="table" style="padding-top:2%; paddint-bottom:10%; padding-left:2%; padding-right:2%;">
            <div class="col-md-12 mb-3">
              <div class="card">
                <div class="card-header input-group">
                  <span><i class="fa-solid fa-table me-2"></i></span> Recent Orders
                  <input type="search" class="bg-transparent border-top-0 border-end-0 border-start-0  border border-2 border-dark p-0 ms-auto"  aria-describedby="addon-wrapping" aria-label="text" />
                 <span class="input-group-text input-group-text border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y" id="addon-wrapping">
                  <i style="font-size: 15px; color: #222;" class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></span>
                </div>

                <div class="card-body">
                  <div class="table-responsive table-hover">
                    <table
                      id="example"
                      class="table table-striped data-table"
                      style="width: 100%"
                    >
                      <!-- <thead>
                        <tr>
                          <th>Order Number</th>
                          <th>Sender</th>
                          <th>Recefient</th>
                          <th>Pick-Up Point</th>
                          <th>Drop-Off Point</th>
                          <th>Date Delivered</th>
                          <th>Assigned Driver</th>
                          <th>Status</th>
                        </tr>
                      </thead> -->
                      <tbody  style="font-size: 13px;" class="text-center">
                        <tr>
                          <td>12345678</td>
                          <td>Jeanie Allanza</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Hershey Mae Dungao</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Bk Pecho</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Ash Sanchez</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Smol Kona</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Jhudiel Suelto</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Gil Pangan</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                        <tr>
                          <td>12345678</td>
                          <td>Kischella Mae David</td>
                          <td>recep</td>
                          <td>pick</td>
                          <td>Drop</td>
                          <td>date</td>
                          <td>assigned</td>
                          <td>status</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </main>
  <!--Main layout-->


</template>


<style>

section{
    padding: 2rem;
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;
  }

.table-hover  tr:hover{
 background-color: rgba(34, 34, 34, 0.288);

}

</style>