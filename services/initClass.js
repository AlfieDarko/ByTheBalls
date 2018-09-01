import Tournament from '../src/Tournament';
import Match from '../src/Match';
import Player from '../src/Player';


class Game(tournamentDB) {
  let playerA = new Player(tournamentDB.players.playerA);
  let playerB = new Player(tournamentDB.players.playerB);
  let playerC = new Player(tournamentDB.players.playerC);
  let playerD = new Player(tournamentDB.players.playerD);
  let playerE = new Player(tournamentDB.players.playerE);
  let playerF = new Player(tournamentDB.players.playerF);
  let playerG = new Player(tournamentDB.players.playerG);
  let playerH = new Player(tournamentDB.players.playerH);

  let match1 = new Match(playerA, playerB);
  let match2 = new Match(playerC, playerD);
  let match3 = new Match(playerE, playerF);
  let match4 = new Match(playerG, playerH);


  let tournament = new Tournament();
}
