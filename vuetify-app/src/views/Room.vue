<template>
  <RoomDetail :room="room" />
</template>

<script>
import RoomDetail from "@/components/RoomDetail";
export default {
  data() {
    return {
      type: this.$route.params.type,
      room: {}
    };
  },
  components: {
    RoomDetail
  },
  watch: {
    $route(to) {
      this.type = to.params.type;
      this.getRoomDetail();
    }
  },
  mounted() {
    this.getRoomDetail();
  },
  methods: {
    getRoomDetail() {
      this.$http
        .get(
          "https://rezervari-ccab3.firebaseio.com/Rooms/" +
            this.type +
            "Room.json"
        )
        .then(response => {
          return response.json();
        })
        .then(newRoom => {
          this.room = newRoom;
        });
    }
  }
};
</script>

<style >
</style>
