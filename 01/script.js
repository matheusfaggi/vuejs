new Vue({
  el: "#app",
  data: {
    title: "Hello World",
    link: "http://google.com.br",
    finishedLink: '<a href="http://google.com.br" target="blank"> Google </a>'
  },
  methods: {
    changeTitle: function(e) {
      this.title = e.target.value;
    },
    sayHello: function() {
      this.title = "Hello";
      return this.title;
    }
  }
});
