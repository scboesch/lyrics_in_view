let app = new Vue({
  el: "#app",
  div: {},
  methods: {
    getLyrics: function() {
      fetch("payphone.txt")
        .then(resp => {
          console.log(resp);
          return resp.text();
        })
        .then(result => {
          console.log(result);
        });
    }
  },
  mounted: function() {
    console.log("here");
    this.getLyrics();
  }
});
