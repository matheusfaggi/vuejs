new Vue({
  el: "#app",
  data: {
    title: "Hello World",
    link: "http://google.com.br"
  },
  methods: {
    changeLink: function(e) {
      this.link = "http://wikipedia.org";
    }
  }
});
