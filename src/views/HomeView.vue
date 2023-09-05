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
            <tr>
              <th scope="row">1</th>
              <td>Nunc lobortis metus eu massa viverra ultri iplacerat nibh</td>
              <td>03-03-2016</td>
              <td><a href="/participant" style="text-decoration: none; color: inherit;">OSAVÕTJAD</a></td>
              <td style="cursor: pointer;">X</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Nunc lobortis metus eu massa viverra ultri iplacerat nibh</td>
              <td>03-03-2016</td>
              <td><a href="/participant" style="text-decoration: none; color: inherit;">OSAVÕTJAD</a></td>
              <td style="cursor: pointer;">X</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <button type="button" @click="toAddNewEvent" class="btn btn-sm">LISA ÜRITUS</button>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center  justify-content-center">
        <div style="background-color: white; height: 100%; width:calc(100% + 5px);">
          <div v-for="event in events" v-if="event.status === 'P'" :key="event.eventId" class="d-flex align-items-center justify-content-center" style="color: darkblue; height: 100%;">
            <div>
              <h4>{{event.eventName}}</h4>
            </div>
            <div>
              <h4>{{event.eventDate}}</h4>
            </div>
            <div>
              <h4 href="/participant" style="text-decoration: none; color: inherit;">OSAVÕTJAD</h4>
            </div>
            <div>
              <h4 style="cursor: pointer;">X</h4>
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
  name: 'homeRoute',
  data() {
    return {
      events: [
        {
          eventId: 0,
          eventName: 'Kulumulu',
          eventDate: '04.09.2023',
          status: 'P'
        }
      ]
    }
  },
  methods: {
    toAddNewEvent() {
      router.push({name: 'addNewEventRoute'})
    },
    getAllEvents: function () {
      this.$http.get("/events")
          .then(response => {
            this.events = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
  },
  beforeMount() {
    this.getAllEvents()
  },
}

</script>


