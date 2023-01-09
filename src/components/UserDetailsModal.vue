<template>
 <section class="modal fade" id="userdetailsModal">
 <div class="modal-dialog modal-lg rounded mt-2 mb-3">
  <div class="modal-content rounded-5 bg-transparent border-0 mx-5 px-2">
    <div class="modal-body">

        <!---right content-->
        <div class="d-flex bd-highlight border border-left bg-white rounded rounded-5 shadow shadow-md">
            <div class="p-5 w-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right text-secondary fw-bold" style="font-size: 18px;">User Details</h4>
                  </div>
            <!----username-->
                  <div class="d-flex justify-content-between align-items-center">
                    <label style="font-size: 13px;" for="basic-url" class="form-label text-muted">Username</label>
                  </div>
                    <div class="input-group mb-3">
                    <input style=" background-color: rgba(39, 114, 245, 0.14);" type="text" class="form-control form-control-sm shadow shadow-md rounded-5" placeholder="Username" id="basic-url" aria-describedby="basic-addon3">
                    </div>
            <!----About-->
                <div class="d-flex justify-content-between align-items-center">
                    <label style="font-size: 13px;" for="basic-url" class="form-label text-muted">About</label>
                  </div>
                    <div class="input-group mb-3">
                    <input style=" background-color: rgba(39, 114, 245, 0.14);" type="text" class="form-control form-control-sm shadow shadow-md rounded-5" placeholder="Enter your bio here" id="basic-url" aria-describedby="basic-addon3">
                    </div>
             <!----Contact-->
            <div class="d-flex justify-content-between align-items-center">
                    <label style="font-size: 13px;" for="basic-url" class="form-label text-muted">Contact</label>
                  </div>
                    <div class="input-group mb-3">
                    <input style=" background-color: rgba(39, 114, 245, 0.14);" type="text" class="form-control form-control-sm shadow shadow-md rounded-5" placeholder="Enter your Contact" id="basic-url" aria-describedby="basic-addon3">
                    </div>
              <!----email-->
            <div class="d-flex justify-content-between align-items-center">
                    <label style="font-size: 13px;" for="basic-url" class="form-label text-muted">Email</label>
                  </div>
                    <div class="input-group mb-3">
                    <input style=" background-color: rgba(39, 114, 245, 0.14);" type="text" class="form-control form-control-sm shadow shadow-md rounded-5" placeholder="Enter your Email" id="basic-url" aria-describedby="basic-addon3">
                    </div>
              <!----company-->
              <div class="d-flex justify-content-between align-items-center">
                    <label style="font-size: 13px;" for="basic-url" class="form-label text-muted">Company</label>
                  </div>
                    <div class="input-group mb-3">
                    <input style=" background-color: rgba(39, 114, 245, 0.14);" type="text" class="form-control form-control-sm shadow shadow-md rounded-5" placeholder="Enter Company" id="basic-url" aria-describedby="basic-addon3">
                    </div>
                  </div>
            <!----left content-->
            <div class="p-5 border-left border rounded-5 shadow shadow-md">
                <div class="d-flex flex-column align-items-center text-center p-3 py-2 text-muted px-0">
              <img class="rounded-circle mt-2" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
              <div class="input-group mb-3 rounded-5 mt-5">
                <span style="font-size: 13px;" class="input-group-text" id="inputGroup-sizing-default">Upload image</span>
                <input style="font-size: 13px; background-color: rgba(39, 114, 245, 0.14);" type="file" class="form-control border-1 shadow shadow-md" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>

            <!-----button-->
            <div class="col text-center mt-5">
           <button style="font-size: 12px;" class="btn btn-sm text-secondary fw-bold rounded btn-light shadow px-3 me-3" data-bs-dismiss="modal">Cancel</button>
           <button style="font-size: 12px;" class="btn btn-sm fw-bold rounded btn-primary text-white shadow px-3">Save</button>
            </div>

            </div>
            </div>
            </div>
    
           </div>
          </div>
       </div>
</section>
</template>

<script>

export default{
  name: 'userdetailsmodal',
}
</script>