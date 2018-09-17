import { Router } from 'express';
import { Tournament } from '../models/tournament';
import tournamentService from '../services/tournamentService';
import TournamentClass from '../src/Tournament';
import MatchClass from '../src/Match';
import PlayerClass from '../src/Player';

const router = Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).end();
});

router.get('/api/v1/tournaments', async function(req, res) {
  try {
    const allTournaments = await Tournament.find({}).select('-__v');
    return res.json(allTournaments);
  } catch (error) {
    return res
      .status(400)
      .json({
        error: 'Bad Request: Make sure you have filled in all parameters',
      })
      .end();
  }
});

router.post('/api/v1/tournaments', async function(req, res) {
  try {
    console.log(req.body, 'req.body');

    console.log(req.body.tournament, 'req.body.tournament');
    const savedTournament = await tournamentService.create(req);
    return res
      .status(201)
      .json({
        success: savedTournament,
        message: 'Success!',
      })
      .end();
  } catch (error) {
    return res
      .status(400)
      .json({
        error: 'Bad Request: Make sure you have filled in all parameters',
      })
      .end();
  }
});

router.get('/api/v1/tournament/:id', async function(req, res) {
  let tournamentID = req.params.id;
  try {
    const oneTournament = await Tournament.findById(tournamentID);
    return res.json(oneTournament);
  } catch (error) {
    return res.status(400).json({
      error: 'Couldnt find a specific tournament',
    });
  }
});

export default router;
