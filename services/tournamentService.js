import { Tournament } from '../models/tournament';

class TournamentService {
  static create(req) {
    let tournamentEntry = new Tournament(req.body);
    return tournamentEntry.save();
  }
}

export default TournamentService;
