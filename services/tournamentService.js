import {
    tournamentSchema,
    Tournament
} from '../models/tournament'


class TournamentService {

    static create(req) {

        let newTournament = new Tournament({
            tournamentName: req.body.tournamentName,
            players: {
                playerA: req.body.players.playerA,
                playerB: req.body.players.playerB,
                playerC: req.body.players.playerC,
                playerD: req.body.players.playerD,
                playerE: req.body.players.playerE,
                playerF: req.body.players.playerF,
                playerG: req.body.players.playerG,
                playerH: req.body.players.playerH,
            }
        })

        return newTournament.save()
    }
}

export default TournamentService