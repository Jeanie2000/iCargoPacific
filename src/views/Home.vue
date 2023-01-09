<script>
import SubNav from '../components/SubNav.vue';
import MainNav from'../components/MainNav.vue';
import Footer from'../components/Footer.vue';

export default{
    name: 'home',
    components: {
        SubNav,
        MainNav,
        Footer,
    }
}
</script>

<template>
  <main class="subnav">
    <SubNav/>
  </main>
 <nav class="mainnav sticky-top">
    <MainNav/>
 </nav>

  <!---Home Page-->
  <section class="homepage" id="home">
    <div class="container-fluid">
      <div class="lc-block" style="padding: 3rem">
        <div class="lc-block">
          <div editable="rich">
            <h2 class="fw-bolder display-4 text-warning shadow">
              WE MOVE IT DIFFERENTLY.
            </h2>
          </div>
        </div>
        <div class="lc-block col-md-8">
          <div editable="rich">
            <p class="lead fw-bold text-white shadow">
              The leading software technology integration platform for logistics
              and supply chain management solution.
            </p>
          </div>
        </div>
        <div class="lc-block pt-3">
          <button
            class="btn btn-warning text-black btn-md shadow me-4 fw-bold rounded-3 px-4"
            type="submit"
            @click.prevent="book"
          >
            Book Now
          </button>
        </div>

        <!-- Company-->
        <div class="py-5 my-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="80"
                    height="80"
                    src="../assets/img/lbc.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="150"
                    height="150"
                    src="../assets/img/sanmig.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="100"
                    height="100"
                    src="../assets/img/fedex.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    width="150"
                    height="150"
                    src="../assets/img/cebu.png"
                    alt="..."
                    aria-label=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!----Homepage-->

<footer>
<Footer/>
</footer>
</template>


<style>
.homepage {
  background-image: url('../assets/img/background-image.png');
}
</style>