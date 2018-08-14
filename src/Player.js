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

  isFirstMatchWinner() {
    if (this.wonFirstMatch == true) {
      return true;
    } else return false;
  }

  isSemiFinalWinner() {
    if (this.wonSemiFinalMatch == true) {
      return true;
    } else return false;
  }
}

export default Player;
