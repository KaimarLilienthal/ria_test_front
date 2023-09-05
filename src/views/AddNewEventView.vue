<template>
  <div style="padding-top: 30px" class="container">
    <div class="row g-0">
      <div class="col-3 d-flex align-items-center " style="background-color: darkblue">
        <div class="form-floating mb-3">
          <div style="color: white; display: flex; align-items: baseline;">
            <span class="indent" style="font-size: 2rem;">Ürituse lisamine</span>
          </div>
        </div>
      </div>
      <div class="col-9">
        <img src="../assets/libled.jpg" height="80" width="837"/>
      </div>
    </div>
  </div>
  <div class="container" style="padding-bottom: 30px">
    <div class="row g-0">
      <div class="col-12" style="background-color: white">
        <div class="form-floating mb-3">
          <div class="row" style="padding-top: 10px">
            <div class="col-4" ></div>
            <div class="col-3" ><span style="color: darkblue; font-size: 1.5rem;">Ürituse lisamine</span></div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4" ></div>
            <div class="col-2" ><span>Ürituse nimi:</span></div>
            <div class="col-2" ><input type="text" aria-label="event-name"></div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4" ></div>
            <div class="col-2" ><span>Toimumisaeg:</span></div>
            <div class="col-2" >
              <input type="datetime-local" id="datetimePicker" class="form-control">
            </div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4" ></div>
            <div class="col-2" ><span>Koht:</span></div>
            <div class="col-2" ><input type="text" aria-label="event-name"></div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4" ></div>
            <div class="col-2" >Lisainfo:</div>
            <div class="col-2" ><input class="bigger-bottom-input" type="text" aria-label="event-name" maxlength="5000"></div>
          </div>
          <div class="row" style="padding-top: 30px">
            <div class="col-4"></div>
            <div class="col-4" ><button @click="toHome" type="button" class="btn btn-secondary btn-sm">Tagasi</button>
              <span class="mx-2"></span>
              <button type="button" class="btn btn-primary btn-sm" style="background-color: darkblue; padding-right: 23px;">
                <span>Lisa</span></button>
            </div>


          </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    toHome(){
      router.push({name: 'homeRoute'})
    }
  },

    mounted() {
      var datetimePicker = document.getElementById("datetimePicker");

      datetimePicker.addEventListener("input", function () {
        var selectedDate = new Date(datetimePicker.value);
        var currentDate = new Date();

        if (selectedDate < currentDate) {
          datetimePicker.value = "";
        }
      });
    }

}
</script>

