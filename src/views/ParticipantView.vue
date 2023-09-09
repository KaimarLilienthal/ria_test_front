<template>
  <div style="padding-top: 30px" class="container">
    <div class="row g-0">
      <div class="col-3 d-flex align-items-center " style="background-color: darkblue">
        <div class="form-floating mb-3">
          <div style="color: white; display: flex; align-items: baseline;">
            <span class="indent" style="font-size: 2rem;">Osavõtjad</span>
          </div>
        </div>
      </div>
      <div class="col-9">
        <img src="../assets/libled.jpg" height="80" width="837"/>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row g-0">
      <div class="col-12" style="background-color: white">
        <div class="form-floating mb-3">
          <div class="row" style="padding-top: 10px">
            <div class="col-4"></div>
            <div class="col-3"><span style="color: darkblue; font-size: 1.5rem;">Osavõtjad</span></div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4"></div>
            <div class="col-2"><span>Ürituse nimi:</span></div>
            <div class="col-2"><span>{{ event.eventName }}</span></div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4"></div>
            <div class="col-2"><span>Toimumisaeg:</span></div>
            <div class="col-2"><span>{{ event.eventDate }}</span>
            </div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4"></div>
            <div class="col-2"><span>Koht:</span></div>
            <div class="col-2"><span>{{ event.eventPlace }}</span></div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4"></div>
            <div class="col-2">Osavõtjad:</div>
          </div>
          <div class="row">
            <div class="col-6"></div>
            <div class="col-6 d-flex align-items-center  justify-content-center">
              <div style="background-color: white; height: 100%; width:calc(100% + 5px);">
                <div class="d-flex align-items-center justify-content-center" style="color: darkblue; height: 100%;">
                  <table class="table table-borderless" style="color: darkblue; padding-left: 13px;">
                    <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(participant, index) in participants" :key="participant.id">
                      <th scope="row">{{ index + 1 }}</th>
                      <td v-if="participant.status === 'P'">
                        {{ participant.personFirstname + " " + participant.personLastname }}
                      </td>
                      <td v-else>{{ participant.companyName }}</td>
                      <td v-if="participant.status === 'P'">{{ participant.personIdCode }}</td>
                      <td v-else>{{ participant.companyRegistrationCode }}</td>
                      <td><a @click="navigateToParticipantInfoView(participant.id)"
                             style="text-decoration: none; color: inherit;">VAATA</a></td>
                      <td @click="toDeleteParticipant(participant.id)" style="cursor: pointer;">KUSTUTA</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="event.status === 'F'" class="container" style="padding-bottom: 30px">
    <div class="row g-0">
      <div class="col-12" style="background-color: white">
        <div class="form-floating mb-3">
          <div class="row" style="padding-top: 10px">
            <div class="col-4"></div>
            <div class="col-3"><span style="color: darkblue; font-size: 1.5rem;">Osavõtja lisamine</span></div>
          </div>
          <div class="row" style="padding-top: 10px">
            <div class="col-4"></div>
            <div class="col-3 d-flex align-items-center">
              <div class="form-check me-auto">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                       value="Person" v-model="selectedOption">
                <label class="form-check-label" for="flexRadioDefault1">
                  Eraisik
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                       value="Company" v-model="selectedOption">
                <label class="form-check-label" for="flexRadioDefault2">
                  Ettevõte
                </label>
              </div>
            </div>
          </div>
          <div id="inputBoxContainerPerson" v-if="isPersonSelected">
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Eesnimi:</span></div>
              <div class="col-2"><input v-model="participantForm.personFirstname" type="text" aria-label="event-name">
              </div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Perenimi:</span></div>
              <div class="col-2"><input v-model="participantForm.personLastname" type="text" aria-label="event-name">
              </div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Isikukood:</span></div>
              <div class="col-2"><input v-model="participantForm.personIdCode" type="text" aria-label="event-name">
              </div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Makseviis:</span></div>
              <div class="col-2">
                <select v-model="participantForm.personPaymentType" class="select my-select-form">
                  <option selected></option>
                  <option value="Pangaülekanne">Pangaülekanne</option>
                  <option value="Sularaha">Sularaha</option>
                </select>
              </div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2">Lisainfo:</div>
              <div class="col-2"><input v-model="participantForm.personInfo" class="bigger-bottom-input" type="text"
                                        aria-label="event-name"
                                        maxlength="1500"></div>
            </div>
          </div>
          <div id="inputBoxContainerCompany" v-if="isCompanySelected">
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõtte juriidiline nimi:</span></div>
              <div class="col-2"><input v-model="participantForm.companyName" type="text" aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõtte registrikood:</span></div>
              <div class="col-2"><input v-model="participantForm.companyRegistrationCode" type="text"
                                        aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Ettevõttest tulevate osavõtjate arv:</span></div>
              <div class="col-2"><input v-model="participantForm.companyParticipantSum" type="text"
                                        aria-label="event-name"></div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2"><span>Osavõtumaksu maksmise liik:</span></div>
              <div class="col-2">
                <select v-model="participantForm.companyPaymentType" class="select my-select-form">
                  <option selected></option>
                  <option value="Pangaülekanne">Pangaülekanne</option>
                  <option value="Sularaha">Sularaha</option>
                </select>
              </div>
            </div>
            <div class="row" style="padding-top: 10px">
              <div class="col-4"></div>
              <div class="col-2">Lisainfo:</div>
              <div class="col-2"><input v-model="participantForm.companyInfo" class="bigger-bottom-input" type="text"
                                        aria-label="event-name"
                                        maxlength="5000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="padding-bottom: 30px">
    <div class="row g-0">
      <div class="col-12" style="background-color: white">
        <div class="form-floating mb-3">
          <div class="row" style="padding-top: 30px">
            <div class="col-4"></div>
            <div class="col-4">
              <button @click="toHome" type="button" class="btn btn-secondary btn-sm">Tagasi</button>
              <span class="mx-2"></span>
              <button v-if="event.status === 'F'" @click="addParticipantToEvent" type="button" class="btn btn-primary btn-sm"
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
      eventId: Number(useRoute().query.eventId),
      selectedOption: 'Person',
      participantId: 0,
      event: [
        {
          id: 0,
          eventName: '',
          eventDate: '',
          eventPlace: '',
          eventInfo: '',
          status: ''
        }
      ],
      participants: [
        {
          id: 0,
          personFirstname: '',
          personLastname: '',
          personIdCode: 0,
          companyName: '',
          companyRegistrationCode: '',
          status: ''
        }
      ],
      participantForm:
          {
            personFirstname: null,
            personLastname: null,
            personIdCode: null,
            personPaymentType: null,
            personInfo: null,
            companyName: null,
            companyRegistrationCode: null,
            companyParticipantSum: null,
            companyPaymentType: null,
            companyInfo: null,
            eventId: 0,
            status: 'P'
          }
    }
  },
  computed: {
    isPersonSelected() {
      return this.selectedOption === 'Person';
    },
    isCompanySelected() {
      return this.selectedOption === 'Company';
    }
  },
  methods: {
    toHome() {
      router.push({name: 'homeRoute'})
    },
    getEventParticipants: function () {
      this.$http.get("/event/participants", {
        params: {
          eventId: this.eventId
        }
      }).then(response => {
        this.participants = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    toDeleteParticipant: function (id) {
      this.$http.delete("/participant/delete", {
            params: {
              participantId: id
            }
          }
      ).then(response => {
        window.location.reload();
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    navigateToParticipantInfoView(id) {
      this.participantId = ''
      this.participantId = id
      router.push({name: 'participantInfoRoute', query: {participantId: id}})
    },
    addParticipantToEvent: function () {
      this.participantForm.eventId = this.eventId
      if (this.selectedOption === "Person") {
        this.participantForm.status = 'P'
      } else {
        this.participantForm.status = 'C'
      }
      this.$http.post("/participant/add", this.participantForm
      ).then(response => {
        window.location.reload();
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    getEvent: function () {
      this.$http.get("/event/info", {
            params: {
              eventId: this.eventId
            }
          }
      ).then(response => {
        this.event = response.data
        this.event.eventDate = this.formatDate(this.event.eventDate);
      })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    formatDate(inputDate) {
      const parts = inputDate.split('-');
      if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${day}-${month}-${year}`;
      } else {
        return 'Invalid Date';
      }
    }
  },
  beforeMount() {
    this.getEvent(),
        this.getEventParticipants()
  }
}
</script>

