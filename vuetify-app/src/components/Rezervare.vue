<template>
  <v-sheet class="px-5" elevation="10" :width="width">
    <v-row class="my-5" justify="center">
      <h1>Rezerveaza</h1>
    </v-row>

    <form>
      <v-container>
        <v-row>
          <v-col>
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="rezervare.checkIN"
                  label="Check In"
                  :placeholder="checkInDate"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="rezervare.checkIN" @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="rezervare.checkOUT"
                  label="Check Out"
                  :placeholder="checkOutDate"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="rezervare.checkOUT" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="rezervare.firstName" label="First Name" required></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="rezervare.lastName" label="Last Name" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Email" v-model="rezervare.email" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              :items="['Simple', 'Medium', 'Deluxe']"
              label="Select type of room"
              dense
              solo
              v-model="rezervare.roomType"
              hide-details
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col justify="center">
            <v-text-field
              class="mx-auto"
              label="Adults"
              v-model="rezervare.adults"
              type="number"
              min="1"
              max="100"
              step="1"
              placeholder="2"
              outlined
              hide-details
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              class="mx-auto"
              label="Children"
              v-model="rezervare.children"
              type="number"
              min="0"
              placeholder="0"
              max="100"
              step="1"
              outlined
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-checkbox
              hide-details
              v-model="rezervare.termsAgr"
              label="I am agree with terms and conditions"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{on, attrs}">
            <v-row>
              <v-col>
                <v-btn block class="mt-3" color="warning" v-bind="attrs" v-on="on">Rezerveaza</v-btn>
              </v-col>
            </v-row>
          </template>

          <v-card elevation="5">
            <v-card-title>All right ?</v-card-title>

            <v-card-text>
              <h3>
                Full name:
                <span
                  style="color: steelblue; text-transform: capitalize"
                >{{rezervare.lastName}} {{rezervare.firstName}}</span>
              </h3>
              <h3>
                Email:
                <span style="color: steelblue">{{rezervare.email}}</span>
              </h3>
              <h3>
                Check In:
                <span style="color: steelblue">{{rezervare.checkIN}}</span> /
                Check Out:
                <span style="color: steelblue">{{rezervare.checkOUT}}</span>
              </h3>
              <h3>
                Room:
                <span style="color: steelblue">{{rezervare.roomType}}</span>
              </h3>
              <h3>
                Adults:
                <span style="color: steelblue">{{rezervare.adults}}</span> /
                Children:
                <span style="color: steelblue">{{rezervare.children}}</span>
              </h3>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="warning" normal @click="dialog = false">No</v-btn>
              <v-btn color="success" normal @click="saveRezervare">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </form>
  </v-sheet>
</template>

<script>
export default {
  methods: {
    saveRezervare() {
      this.dialog = false;
      this.newRezervare = this.rezervare;
      this.rezervare = {};
      for (
        let i = this.newRezervare.checkIN;
        i <= this.newRezervare.checkOUT;
        i++
      ) {
        this.dataOcupata.push(i);
      }
      console.log(this.dataOcupata);
    }
  },
  data() {
    return {
      dataOcupata: [],
      width: "50vw",
      menu1: false,
      menu2: false,
      dialog: false,
      checkInDate: new Date().toISOString().substr(0, 10),
      checkOutDate: new Date().toISOString().substr(0, 10),
      rezervare: {
        firstName: "",
        lastName: "",
        email: "",
        checkIN: "",
        checkOUT: "",
        roomType: "",
        adults: "",
        children: "",
        termsAgr: ""
      },
      newRezervare: ""
    };
  }
};
</script>