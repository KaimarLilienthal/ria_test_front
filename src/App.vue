<template>
  <div style="padding-top: 30px; padding-bottom: 30px;">
    <header class="navbar" style="background-color: white; padding: unset">
      <div class="container">

        <div class="col-auto justify-content-start">
          <div style="padding-right: 80px;">
            <a class="navbar-brand">
              <img src="@/assets/logo.svg" alt="Logo">
            </a>
          </div>
        </div>

        <div class="col-1-auto">
          <router-link to="/" class="nav-link" style="color: #080880; font-size: smaller; padding: 18px 0.5rem; font-weight: bold;">AVALEHT</router-link>
        </div>

        <div class="col-2-auto">
          <router-link to="/event/new" class="nav-link" style="color: #080880; font-size: smaller; padding: 18px 0.5rem; font-weight: bold;">ÜRITUSE LISAMINE</router-link>
        </div>



        <div class="flex-grow-1 d-flex justify-content-end">
          <a>
            <img src="@/assets/symbol.svg" alt="Symbol" width="50" height="50">
          </a>
        </div>

      </div>
    </header>
    <router-view/>

    <footer class="footer" style="background-color: #282727; padding: 20px;">
      <div class="container text-lg-start">
        <div class="row">
          <div class="col" style="color: white">
            <h4>Fusce</h4>
            <h6>Econsectetur</h6>
            <h6>Ksollicitudin</h6>
            <h6>omvulputate</h6>
            <h6>Nunc fringilla tellu</h6>
          </div>
          <div class="col" style="color: white">
            <h4>Curabitur</h4>
            <h6>Emauris</h6>
            <h6>Kfringilla</h6>
            <h6>Oin magna sem</h6>
            <h6>Kelementum</h6>
          </div>
          <div class="col" style="color: white">
            <h4>Kontakt</h4>
            <h6>Peakontor: Tallinnas</h6>
            <h6>Väike-Ameerika 1, 11415 Tallinn</h6>
            <h6>Telefon: 605 4450</h6>
            <h6>Faks:605 3186</h6>
          </div>
          <div class="col" style="color: white">
            <h4 class="empty-space">.</h4>
            <h6>Harukontor: Võrus</h6>
            <h6>Oja tn 7 (külastusaadress)</h6>
            <h6>Telefon: 605 3330</h6>
            <h6>Faks: 605 3155</h6>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>


<script>
</script>

<style>
body{
  background: lightgrey;
}
</style>
