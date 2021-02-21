<template>
  <v-container class="mx-auto">
    <br />
    <br />
    <br />
    <v-row>
      <v-card class="mx-auto my-5" max-width="333" v-for="room in rooms" :key="room.id">
        <v-img class="white--text align-end" height="200px" :src="room.images.img1">
          <v-card-title>{{room.title}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{room.price}}/night</v-card-subtitle>
        <v-card-text class="text--primary pb-0">
          <p v-line-clamp="5" class="mb-0">{{room.details}}</p>
        </v-card-text>
        <v-card-actions mx-auto>
          <v-btn
            color="orange"
            dark
            normal
            @click="$store.state.type = `${room.type}`"
            router
            :to="`/room/${room.type}`"
          >Vue me</v-btn>
          <v-btn color="orange" dark normal router to="/rezervari">Rezerveaza</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rooms: ""
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$http
        .get("https://rezervari-ccab3.firebaseio.com/Rooms.json")
        .then(response => {
          return response.json();
        })
        .then(rooms => {
          this.rooms = rooms;
        });
    }
  }
};
</script>