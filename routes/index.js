import {
  Router
} from 'express';
import {
  tournamentSchema,
  Tournament
} from '../models/tournament'
import tournamentService from '../services/tournamentService'
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
  try {
    const savedTournament = await tournamentService.create(req)
    return res.status(201).json({
      success: savedTournament,
      message: 'Success!'
    }).end();
  } catch (error) {
    return res.status(400).json({
      error: 'Bad Request: Make sure you have filled in all parameters'
    }).end()
  }
})

export default router;