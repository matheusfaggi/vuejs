new Vue({
  el: "#app",
  data: {
    attachRed: false,
    color: "green",
    width: 100,
    height: 100
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + "px",
        height: this.height + "px",
        display: "inline-block",
        margin: "20px 10px 0 0"
      };
    }
  }
});
