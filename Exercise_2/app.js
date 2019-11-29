new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    showAlert: function() {
      alert(this.value);
    },
    storeValue: function(e) {
      this.value = e.target.value;
    }
  }
});
