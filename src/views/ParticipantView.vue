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
                  <table v-for="(participant, index) in participants" :key="participant.id"
                         class="table table-borderless" style="color: darkblue; padding-left: 13px;">
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
                    <tr>
                      <th scope="row">{{ index + 1 }}</th>
                      <td v-if="participant.status === 'P'">
                         {{participant.personFirstname + " " + participant.personLastname}}
                      </td>
                      <td v-else>{{ participant.companyName }}</td>
                      <td v-if="participant.status === 'P'">{{ participant.personCode }}</td>
                      <td v-else>{{ participant.companyRegistrationCode }}</td>
                      <td><a href="/participant/info" style="text-decoration: none; color: inherit;">VAATA</a></td>
                      <td style="cursor: pointer;">KUSTUTA</td>
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
  <div class="container" style="padding-bottom: 30px">
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

          <div id="inputBoxContainerCompany" v-if="isCompanySelected">
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
              <button type="button" class="btn btn-primary btn-sm"
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
          personCode: '',
          companyName: '',
          companyRegistrationCode: '',
          status: ''
        }
      ]
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
          }
      ).then(response => {
        this.participants = response.data
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

