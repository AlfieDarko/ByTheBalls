class Player {
  constructor(name) {
    this.name = name;
    this.wonFirstMatch = null;
    this.wonSemiFinalMatch = null;
    this.wonFinalMatch = null;
  }

  winFirstMatch() {
    this.wonFirstMatch = true;
  }

  winSemiFinalMatch() {
    this.wonSemiFinalMatch = true;
  }

  winFinalMatch() {
    this.wonFinalMatch = true;
  }
}

export default Player;
