import { Router } from 'express';
import { Tournament } from '../models/tournament';
import tournamentService from '../services/tournamentService';

const router = Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express',
  });
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

export default router;
