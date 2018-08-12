import {
  Router
} from 'express';
import {
  tournamentSchema,
  Tournament
} from '../models/tournament'
const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/api/v1/tournaments', function (req, res, next) {
  res.json(
    [{
      'tournamentName': 'Makers PingPong',
      'players': {
        playerA: 'James',
        playerB: 'Harry',
        playerC: 'Jason',
        playerD: 'Kofi',
        playerE: 'Ali',
        playerF: 'Channelle',
        playerG: 'Jaques',
        playerH: 'Marcell'
      }
    }]
  );
});

router.post('/api/v1/tournaments', function (req, res, next) {
  // console.log(req)
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

  newTournament.save(function (err) {
    if (err) {
      console.log(err)
      return res.status(400).json({
        status: 400,
        message: "Bad Request"
      }).end();
    }
  })

  return res.status(200).json({
    status: 200,
    message: "Success!"
  }).end();

})
export default router;