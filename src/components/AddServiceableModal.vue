<template>
    <!----Add Staff Modal-->
    <section class="modal fade" id="addserviceableModal">
        <div class="modal-dialog modal-md bg-white rounded-5">
            <div class="modal-content bg-white rounded-5 shadow">
                <div class="modal-body text-center mx-5">
                    <h5 class="text-muted text-start fw-bold mt-3">Add Serviceable Areas</h5>
    
                  <!-- Employee ID -->
                    <div class="mt-4 text-start text-muted fw-bold" style="font-size: 13px;">
                        <label for="exampleInputID" class="form-label">Point City 1</label>
                        <input  style=" background-color:rgba(165, 183, 233, 0.51);" type="text" class="form-control form-control-md rounded-5 shadow shadow-sm" id="exampleInputID">
                    </div>
                 <!-- Employee ID -->
    
                   <!-- Staff role -->
                   <div class="mt-4 text-start text-muted fw-bold" style="font-size: 13px;">
                        <label for="exampleInputID" class="form-label">Point City 2</label>
                        <input  style=" background-color:rgba(165, 183, 233, 0.51);" type="text" class="form-control form-control-md rounded-5 shadow shadow-sm" id="exampleInputID">
                    </div>
                 <!-- Staff role -->
    
                 <!-- Full Name -->
                 <div class="mt-4 text-start text-muted fw-bold" style="font-size: 13px;">
                        <label for="exampleInputID" class="form-label">Region</label>
                        <input style=" background-color:rgba(165, 183, 233, 0.51);" type="text" class="form-control form-control-md rounded-5 shadow shadow-sm" id="exampleInputID">
                    </div>
                  <!-- Full Name -->
    
                 <!----Button-->
                 <div class="col text-center mt-4 mb-3">
               <button style="font-size: 15px;" class="btn btn-sm text-secondary fw-bold rounded btn-white shadow border border-2 px-4 me-3" data-bs-dismiss="modal">Cancel</button>
               <button style="font-size: 15px;" class="btn btn-sm fw-bold rounded btn-primary text-white shadow px-4">Add</button>
                </div>
                </div>
            </div>
        </div>
    
    </section>
    <!----Add Staff Modal-->
    </template>
    
    <script>
    export default{
        name: 'addserviceablemodal',
    }
    </script>