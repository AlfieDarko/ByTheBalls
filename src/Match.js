class Match {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.firstMatchWinner;
    this.semiFinalMatchWinner;
    this.finalMatchWinner;
  }

  setFirstMatchWinner(winner) {
    winner.winFirstMatch();
    this.firstMatchWinner = winner;
  }

  setSemiFinalMatchWinner(winner) {
    winner.winSemiFinalMatch();
    this.semiFinalMatchWinner = winner;
  }

  setFinalMatch(winner) {
    winner.winFinalMatch();
    this.finalMatchWinner = winner;
  }

  getFirstMatchWinner() {
    return this.firstMatchWinner;
  }

  getSemiFinalMatchWinner() {
    return this.semiFinalMatchWinner;
  }

  getFinalMatchWinner() {
    return this.finalMatchWinner;
  }
}

export default Match;
