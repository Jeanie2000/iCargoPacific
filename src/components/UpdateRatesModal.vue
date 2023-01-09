<template>
    <!----Add Staff Modal-->
    <section class="modal fade" id="updaterateModal">
        <div class="modal-dialog modal-md bg-white rounded-5">
            <div class="modal-content bg-white rounded-5 shadow">
                <div class="modal-body text-center mx-5">
                    <h5 class="text-muted text-start fw-bold mt-3">Update Rates</h5>
    
                   <!-- type of services -->
                   <div class="mt-4 text-start text-muted fw-bold" style="font-size: 13px;">
                        <label for="exampleInput2" class="form-label">Type of Services</label>
                    </div>
                    <!----Dropdown button-->
                    <div class="input-group mb-3">
                    <input  style=" background-color:rgba(165, 183, 233, 0.51);" type="text" class="form-control form-control-md dropdown-toggle shadow rounded-5 shadow shadow-sm" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-secondary  border-0  bg-transparent dropdown-toggle btn-md position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Luzon</a></li>
                        <li><a class="dropdown-item" href="#">Visayas</a></li>
                        <li><a class="dropdown-item" href="#">Mindanao</a></li>
                    </ul>
                    </div>
    
                   <!-- Cargo type -->
                   <div class="mt-4 text-start text-muted fw-bold" style="font-size: 13px;">
                        <label for="exampleInput2" class="form-label">Cargo Type</label>
                    </div>
                    <!----Dropdown button-->
                    <div class="input-group mb-3">
                    <input  style=" background-color:rgba(165, 183, 233, 0.51);" type="text" class="form-control form-control-md dropdown-toggle shadow rounded-5 shadow shadow-sm" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-secondary  border-0  bg-transparent dropdown-toggle btn-md position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Luzon</a></li>
                        <li><a class="dropdown-item" href="#">Visayas</a></li>
                        <li><a class="dropdown-item" href="#">Mindanao</a></li>
                    </ul>
                    </div>


                <!-- vehicle type -->
                   <div class="mt-4 text-start text-muted fw-bold" style="font-size: 13px;">
                        <label for="exampleInput2" class="form-label">Vehicle Type</label>
                    </div>
                    <!----Dropdown button-->
                    <div class="input-group mb-3">
                    <input  style=" background-color:rgba(165, 183, 233, 0.51);" type="text" class="form-control form-control-md dropdown-toggle shadow rounded-5 shadow shadow-sm" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-secondary  border-0  bg-transparent dropdown-toggle btn-md position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Luzon</a></li>
                        <li><a class="dropdown-item" href="#">Visayas</a></li>
                        <li><a class="dropdown-item" href="#">Mindanao</a></li>
                    </ul>
                    </div>

                     <!-- kl/km -->
                   <div class="mt-4 text-start text-muted fw-bold" style="font-size: 13px;">
                        <label for="exampleInput2" class="form-label">Kilo per kilometer (kl/km)</label>
                    </div>
                    <!----Dropdown button-->
                    <div class="input-group mb-3">
                    <input  style=" background-color:rgba(165, 183, 233, 0.51);" type="text" class="form-control form-control-md dropdown-toggle shadow rounded-5 shadow shadow-sm" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-secondary  border-0  bg-transparent dropdown-toggle btn-md position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Luzon</a></li>
                        <li><a class="dropdown-item" href="#">Visayas</a></li>
                        <li><a class="dropdown-item" href="#">Mindanao</a></li>
                    </ul>
                    </div>
                 <div class="note text-muted text-start">
                    <span style="font-size: 13px;"> Rate: 1(Weight/kg) * 1(Weight/km)</span>
                </div>
    
    
                 <!----Button-->
                 <div class="col text-center mt-4 mb-3">
               <button style="font-size: 15px;" class="btn btn-sm text-secondary fw-bold rounded btn-white shadow border border-2 px-4 me-3" data-bs-dismiss="modal">Cancel</button>
               <button style="font-size: 15px;" class="btn btn-sm fw-bold rounded btn-primary text-white shadow px-4">Save</button>
                </div>
                </div>
            </div>
        </div>
    
    </section>
    <!----Add Staff Modal-->
    </template>
    
    <script>

    export default{
        name: 'updateratemodal',
    }
    </script>