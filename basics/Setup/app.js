new Vue({
  el: "#app",
  data: {
    gameIsRunning: false,
    log: {},
    monsterHealth: 100,
    playerHealth: 100,
    log: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.log = [];
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    healthBar: function(person) {
      return {
        backgroundColor: person === "you" ? "green" : "red",
        margin: 0,
        color: "white",
        width:
          person === "you" ? this.playerHealth + "%" : this.monsterHealth + "%"
      };
    },
    attack: function(isSpecial = false) {
      var damage = Math.round(Math.random() * (isSpecial ? 15 : 10 - 0) + 0);
      var selfDamage = Math.round(Math.random() * (damage + 2 - 0) + 0);

      this.playerHealth -= selfDamage;
      this.monsterHealth -= damage;
      if (this.checkWin()) return;

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
    },
    heal: function() {
      var heal = Math.round(Math.random() * (10 - 0) + 0);
      var selfDamage = Math.round(Math.random() * (heal - 0) + 0);
      this.playerHealth += heal - selfDamage;
      if (this.playerHealth >= 100) {
        this.playerHealth = 100;
        alert("Your life is full");
        return;
      }
      this.log.push({
        type: "heal",
        heal: heal - selfDamage,
        class: "heal-turn"
      });
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won, wanna play again?")) this.startGame();
        else this.giveUp();
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost, wanna play again?")) this.startGame();
        else this.giveUp();
        return true;
      }
      return false;
    }
  },
  watch: {
    isPlaying: function() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.log = [];
    }
  }
});
