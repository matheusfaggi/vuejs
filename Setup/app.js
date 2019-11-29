new Vue({
  el: "#app",
  data: {
    gameIsRunning: false,
    log: {},
    monsterLife: 100,
    yourLife: 100,
    log: []
  },
  methods: {
    toogleRunningGame: function() {
      this.gameIsRunning = !this.gameIsRunning;
      this.monsterLife = 100;
      this.yourLife = 100;
      this.log = [];
    },
    healthBar: function(person) {
      return {
        backgroundColor: person === "you" ? "green" : "red",
        margin: 0,
        color: "white",
        width: person === "you" ? this.yourLife + "%" : this.monsterLife + "%"
      };
    },
    attack: function(isSpecial = false) {
      var damage = Math.round(Math.random() * (isSpecial ? 15 : 10 - 0) + 0);
      var selfDamage = Math.round(Math.random() * (damage + 2 - 0) + 0);
      console.log(damage);
      console.log(`${selfDamage > damage ? "tomo preju" : "saiu no lucro"}`);

      this.yourLife -= selfDamage;
      this.monsterLife -= damage;

      this.log.push({
        type: "attack",
        person: "you",
        target: "monster",
        damage: damage,
        class: "monster-turn"
      });
      this.log.push({
        type: "attack",
        person: "monster",
        target: "you",
        damage: selfDamage,
        class: "player-turn"
      });

      if (this.yourLife <= 0) {
        this.isPlaying = !this.isPlaying;
        alert("Você perdeu ! :( ");
      } else if (this.monsterLife <= 0) {
        this.isPlaying = !this.isPlaying;
        alert("Você ganhou!! :) ");
      }
    },
    heal: function() {
      var heal = Math.round(Math.random() * (10 - 0) + 0);
      var selfDamage = Math.round(Math.random() * (heal - 0) + 0);
      this.yourLife += heal - selfDamage;
      if (this.yourLife >= 100) {
        this.yourLife = 100;
        alert("Your life is full");
        return;
      }
      this.log.push({
        type: "heal",
        heal: heal - selfDamage,
        class: "heal-turn"
      });
    }
  },
  watch: {
    isPlaying: function() {
      this.monsterLife = 100;
      this.yourLife = 100;
      this.log = [];
    }
  }
});
