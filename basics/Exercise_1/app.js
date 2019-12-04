new Vue({
  el: "#exercise",
  data: {
    name: "Matheus Faggi",
    age: 20,
    linkPhoto: "https://picsum.photos/100"
  },
  methods: {
    ageTimes: function(times) {
      return this.age * times;
    },
    randomNumber: function() {
      return Math.random() * (1 - 0) + 0;
    }
  }
});
