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
            <div v-if="participant.status === 'P'" class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Eesnimi:</span></div>
              <div class="col-2"><input v-model="participant.personFirstname" type="text" aria-label="event-name"></div>
            </div>
            <div v-else class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõtte juriidiline nimi:</span></div>
              <div class="col-2"><input v-model="participant.companyName" type="text" aria-label="event-name"></div>
            </div>
            <div v-if="participant.status === 'P'" class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Perenimi:</span></div>
              <div class="col-2"><input v-model="participant.personLastname" type="text" aria-label="event-name"></div>
            </div>
            <div v-else class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõtte registrikood:</span></div>
              <div class="col-2"><input v-model="participant.companyRegistrationCode" type="text"
                                        aria-label="event-name"></div>
            </div>
            <div v-if="participant.status === 'P'" class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Isikukood:</span></div>
              <div class="col-2"><input v-model="participant.personIdCode" type="text" aria-label="event-name"></div>
            </div>
            <div v-else class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõttest tulevate osavõtjate arv:</span></div>
              <div class="col-2"><input v-model="participant.companyParticipantSum" type="text" aria-label="event-name">
              </div>
            </div>
            <div v-if="participant.status === 'P'" class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Makseviis:</span></div>
              <div class="col-2">
                <select v-model="participant.personPaymentType" class="select my-select-form">
                  <option value="Pangaülekanne">Pangaülekanne</option>
                  <option value="Sularaha">Sularaha</option>
                </select>
              </div>
            </div>
            <div v-else class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Osavõtumaksu maksmise liik:</span></div>
              <div class="col-2">
                <select v-model="participant.companyPaymentType" class="select my-select-form">
                  <option value="Pangaülekanne">Pangaülekanne</option>
                  <option value="Sularaha">Sularaha</option>
                </select>
              </div>
            </div>
            <div v-if="participant.status === 'P'" class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2">Lisainfo:</div>
              <div class="col-2"><input v-model="participant.personInfo" class="bigger-bottom-input" type="text"
                                        aria-label="event-name"
                                        maxlength="1500">
              </div>
            </div>
            <div v-else class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2">Lisainfo:</div>
              <div class="col-2"><input v-model="participant.companyInfo" class="bigger-bottom-input" type="text"
                                        aria-label="event-name"
                                        maxlength="5000"></div>
            </div>
          </div>
          <div class="row" style="padding-top: 30px">
            <div class="col-4"></div>
            <div class="col-4">
              <button @click="toHome" type="button" class="btn btn-secondary btn-sm">Tagasi</button>
              <span class="mx-2"></span>
              <button @click="updateParticipant" type="button" class="btn btn-primary btn-sm"
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
import {useRoute} from "vue-router";

export default {
  data() {
    return {
      participantId: (useRoute().query.participantId),
      participant:
          {
            id: 0,
            personFirstname: '',
            personLastname: '',
            personIdCode: '',
            personPaymentType: '',
            personInfo: '',
            companyName: '',
            companyRegistrationCode: '',
            companyParticipantSum: '',
            companyPaymentType: '',
            companyInfo: '',
            status: ''
          }
    }
  },
  methods: {
    getParticipantInfo: function () {
      this.$http.get("/participant/info", {
            params: {
              participantId: this.participantId
            }
          }
      ).then(response => {
        this.participant = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    updateParticipant: function () {
      this.$http.put("/participant/info/update", this.participant, {
            params: {
              participantId: this.participantId
            }
          }
      ).then(response => {
        window.location.reload();
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    toHome() {
      router.push({name: 'homeRoute'})
    },
  },
  beforeMount() {
    this.getParticipantInfo()
  }
}
</script>

