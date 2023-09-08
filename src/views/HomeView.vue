<template>
  <div style="padding-top: 30px;" class="container">
    <div class="row g-0">
      <div class="col-6 d-flex align-items-center " style="background-color: darkblue">
        <div class="form-floating mb-3" height="313" width="600">
          <div style="color: white; display: flex; align-items: baseline;">
            <span class="indent" style="font-size: 1.25rem;">Sed nec elit vestibulum, <span class="bold-text">tincidunt orci</span> et, sagittis</span>
          </div>
          <div style="color: white; display: flex; align-items: baseline;">
            <span class="indent" style="font-size: 1.25rem;">ex. Vestibulum rutrum <span class="bold-text">neque suscipit</span> ante</span>
          </div>
          <div style="color: white; display: flex; align-items: baseline;">
            <span class="indent" style="font-size: 1.25rem;">mattis maximus. Nulla non sapien <span class="bold-text">viverra,</span></span>
          </div>
          <div style="color: white; display: flex; align-items: baseline;">
            <span class="indent" style="font-size: 1.25rem;"><span class="bold-text">labortis lorem non</span>, accumsan metus.</span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <img src="../assets/pilt.jpg" height="319" width="558"/>
      </div>
    </div>
  </div>
  <div style="padding-top: 30px;" class="container">
    <div class="row" style="padding-left: 13px;">
      <div class="col-6 d-flex align-items-center justify-content-center"
           style="background-color: darkblue; width:calc(50% - 5px); height: 10vh">
        <div>
          <div style="color: white;">
            <span class="indent" style="font-size: 1.25rem;">Tulevased üritused</span>
          </div>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center  justify-content-center">
        <div style="background-color: darkblue; height: 100%; width:calc(100% + 5px);">
          <div class="d-flex align-items-center justify-content-center" style="color: white; height: 100%;">
            <span class="indent" style="font-size: 1.25rem;">Toimunud üritused</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="padding-bottom: 30px">
    <div class="row" style="padding-left: 13px;">
      <div class="col-6"
           style="background-color: white; width:calc(50% - 5px)">
        <div style="width: 545px; margin: 0 auto; margin-left: 0 !important;">
          <table v-for="(activeEvent, index) in activeEvents" :key="activeEvent.id" class="table table-borderless"
                 style="color: darkblue; padding-left: 13px;">
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
              <td>{{ activeEvent.eventName }}</td>
              <td>{{ activeEvent.eventDate }}</td>
              <td @click="navigateToParticipantView(activeEvent.id)" style="text-decoration: none; color: inherit;">
                OSAVÕTJAD
              </td>
              <td @click="toDeleteEvent(activeEvent.id)" style="cursor: pointer;"><img class="remove" src="../assets/remove.svg"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center  justify-content-center">
        <div style="background-color: white; height: 100%; width:calc(100% + 5px);">
          <table id="myTable" v-for="(pastEvent, index) in pastEvents" :key="pastEvent.id"
                 class="table table-borderless"
                 style="color: darkblue; padding-left: 13px;">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col" style="width: 100px;"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ pastEvent.eventName }}</td>
              <td>{{ pastEvent.eventDate }}</td>
              <td><a @click="navigateToParticipantView(pastEvent.id)" style="text-decoration: none; color: inherit;">OSAVÕTJAD</a>
              </td>
              <td @click="toDeleteEvent(pastEvent.id)" style="cursor: pointer;"><img class="remove" src="../assets/remove.svg"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <button type="button" @click="toAddNewEvent" class="btn btn-sm">LISA ÜRITUS</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'homeRoute',
  data() {
    return {
      eventId: 0,
      activeStatus: 'F',
      pastStatus: 'P',
      activeEvents: [
        {
          id: 0,
          eventName: '',
          eventDate: ''
        }
      ],
      pastEvents: [
        {
          id: 0,
          eventName: '',
          eventDate: ''
        }
      ]
    }
  },
  methods: {
    toAddNewEvent() {
      router.push({name: 'addNewEventRoute'})
    },
    getAllActiveEvents: function () {
      this.$http.get("/event", {
            params: {
              status: this.activeStatus
            }
          }
      ).then(response => {
        this.activeEvents = response.data
        this.formatEventDates(this.activeEvents);
      })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    getAllPastEvents: function () {
      this.$http.get("/event", {
            params: {
              status: this.pastStatus
            }
          }
      ).then(response => {
        this.pastEvents = response.data
        this.formatEventDates(this.pastEvents);
      })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    navigateToParticipantView(id) {
      this.eventId = ''
      this.eventId = id
      router.push({name: 'participantRoute', query: {eventId: this.eventId}})
    },
    toDeleteEvent: function (id) {
      this.$http.delete("/event/delete", {
            params: {
              eventId: id
            }
          }
      ).then(response => {
        window.location.reload();
      }).catch(error => {
        console.log('Error:', error);
      })
    },
    formatEventDates(events) {
      for (let i = 0; i < events.length; i++) {
        if (events[i].eventDate) {
          events[i].eventDate = this.formatDate(events[i].eventDate);
        }
      }
    },
    formatDate(inputDate) {
      const parts = inputDate.split('-');
      if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${day}-${month}-${year}`;
      } else {
        // Handle invalid date format
        return 'Invalid Date';
      }
    },
  },
  beforeMount() {
    this.getAllActiveEvents()
    this.getAllPastEvents()
  }
}
</script>


