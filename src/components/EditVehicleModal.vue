<template>
    <!----Add Staff Modal-->
    <section class="modal fade" id="editvehicleModal">
        <div class="modal-dialog modal-md bg-white rounded-5">
            <div class="modal-content bg-white rounded-5 shadow">
                <div class="modal-body text-center mx-5">
                    <h5 class="text-muted text-start fw-bold mt-3 mb-5">Edit Vehicle Status</h5>
                    <button style="font-size: 12px;" class="btn btn-sm fw-bold rounded mt-5 btn-danger text-white shadow px-4 position-absolute top-0 end-0">Remove</button>
                    <h5  style="font-size: 15px;" class="text-muted text-start fw-bold mt-3 mb-3">Canter FE84 Light Truck</h5>

                   <!-- Checkbox-->
                   <ul class="list-group rounded-0 mx-5">
                    <li class="list-group-item border-0 d-flex align-items-center text-muted ps-0">
                        <input style=" background-color:rgba(165, 183, 233, 0.51);"  class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Available
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center text-muted ps-0">
                        <input style=" background-color:rgba(165, 183, 233, 0.51);"  class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        On Transit
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center text-muted ps-0">
                        <input style=" background-color:rgba(165, 183, 233, 0.51);"  class="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Under Maintenance
                    </li>
                   </ul>
                  
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
        name: 'editvehiclemodal',
    }
    </script>