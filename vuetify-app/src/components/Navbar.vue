<template>
  <div>
    <v-app-bar dark flat app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
      <v-container class="mx-auto">
        <v-row align="center">
          <v-toolbar-title class="mx-5 myLogo" @click="goToHome">HOTEL LOGO</v-toolbar-title>
          <v-btn class="hidden-sm-and-down" text>Despre</v-btn>
          <v-menu dark open-on-hover offset-y>
            <template v-slot:activator="{on}">
              <v-btn class="hidden-sm-and-down" v-on="on" text route to="/rooms">
                Camere
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item router to="/room/simple">
                <v-list-item-title>Simple</v-list-item-title>
              </v-list-item>
              <v-list-item router to="/room/medium">
                <v-list-item-title>Mediu</v-list-item-title>
              </v-list-item>
              <v-list-item router to="/room/deluxe">
                <v-list-item-title>Deluxe</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn class="hidden-sm-and-down" text router to="/rezervari">Rezervari</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark absolute temporary>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>HOTEL LOGO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router to="/">
          <v-list-item-icon>
            <v-icon>mdi-alarm</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Despre</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-bed</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Camere</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item router to="/room/simple">
            <v-list-item-content>
              <v-list-item-title>Simple</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/room/medium">
            <v-list-item-content>
              <v-list-item-title>Medium</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/room/deluxe">
            <v-list-item-content>
              <v-list-item-title>Deluxe</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item router to="/rezervari">
          <v-list-item-icon>
            <v-icon>mdi-alarm</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Rezervari</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    goToHome() {
      if (this.$route.name === "Home") return;
      else this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.myLogo {
  cursor: pointer;
}
</style>
