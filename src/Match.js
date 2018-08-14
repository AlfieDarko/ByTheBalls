class Match {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  setFirstMatchWinner(winner) {
    winner.winFirstMatch();
  }

  setSemiFinalMatchWinner(winner) {
    winner.winSemiFinalMatch();
  }

  setFinalMatch(winner) {
    winner.winFinalMatch();
  }
}

export default Match;
