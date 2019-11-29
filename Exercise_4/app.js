new Vue({
  el: "#exercise",
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    userClass: "",
    isVisible: true,
    myStyle: {
      width: "100px",
      height: "150px",
      backgroundColor: "gray"
    },
    progressBar: {
      width: "0%",
      height: "100%",
      backgroundColor: "green"
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 2000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      var progress = setInterval(function() {
        width += 10;
        vm.progressBar.width = width + "%";
        if (width === 100) clearInterval(progress);
      }, 500);
    }
  }
});
