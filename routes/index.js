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

router.post('/api/v1/tournaments', async function (req, res, next) {

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

  try {
    const savedTournament = await newTournament.save()
    return res.status(201).json({
      success: savedTournament,
      message: 'Success!'
    }).end();
  } catch (error) {
    return res.status(500).json({
      error: 'Missing parameters'
    }).end()
  }

})

export default router;