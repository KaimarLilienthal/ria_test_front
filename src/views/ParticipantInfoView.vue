<template>
  <div style="padding-top: 30px" class="container">
    <div class="row g-0">
      <div class="col-3 d-flex align-items-center " style="background-color: darkblue">
        <div class="form-floating mb-3">
          <div style="color: white; display: flex; align-items: baseline;">
            <span class="indent" style="font-size: 2rem;">Osavõtja info</span>
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
            <div class="col-4"></div>
            <div class="col-3"><span style="color: darkblue; font-size: 1.5rem;">Osavõtja info</span></div>
          </div>


          <div id="inputBoxContainerPerson">
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Eesnimi:</span></div>
              <div class="col-2"><input type="text" aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Perenimi:</span></div>
              <div class="col-2"><input type="text" aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Isikukood:</span></div>
              <div class="col-2"><input type="text" aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Makseviis:</span></div>
              <div class="col-2">
                <select class="select my-select-form">
                  <option selected></option>
                  <option value="1">Pangaülekanne</option>
                  <option value="3">Sularaha</option>
                </select>
              </div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2">Lisainfo:</div>
              <div class="col-2"><input class="bigger-bottom-input" type="text" aria-label="event-name"
                                        maxlength="1500"></div>
            </div>
          </div>


          <div id="inputBoxContainerCompany">
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõtte juriidiline nimi:</span></div>
              <div class="col-2"><input type="text" aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõtte registrikood:</span></div>
              <div class="col-2"><input type="text" aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõttest tulevate osavõtjate arv:</span></div>
              <div class="col-2"><input type="text" aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Osavõtumaksu maksmise liik:</span></div>
              <div class="col-2">
                <select class="select my-select-form">
                  <option selected></option>
                  <option value="1">Pangaülekanne</option>
                  <option value="3">Sularaha</option>
                </select>
              </div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2">Lisainfo:</div>
              <div class="col-2"><input class="bigger-bottom-input" type="text" aria-label="event-name"
                                        maxlength="5000"></div>
            </div>
          </div>


          <div class="row" style="padding-top: 30px">
            <div class="col-4"></div>
            <div class="col-4">
              <button @click="toHome" type="button" class="btn btn-secondary btn-sm">Tagasi</button>
              <span class="mx-2"></span>
              <button type="button" @click="toParticipant" class="btn btn-primary btn-sm"
                      style="background-color: darkblue">
                <span>Salvesta</span></button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router"


export default {
  data() {
    return {}
  },

  methods: {
    toHome() {
      router.push({name: 'participantRoute'})
    },
    toParticipant() {
      router.push({name: 'participantRoute'})
    },
  },
}


</script>

