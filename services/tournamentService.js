import { Tournament } from '../models/tournament';

class TournamentService {
  static create(req) {
    console.log('req players', req.body.players, 'req');
    console.log('reqnew', req.body.players[0][0], 'reqnew');
    console.log('reqnew1', req.body.players[1], 'reqnew');

    let tournamentEntry = new Tournament({
      tournamentName: req.body.tournamentName,
      players: req.body.players,
    });
    console.log(tournamentEntry);
    return tournamentEntry.save();
  }
}

export default TournamentService;
