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
}

export default Player;
