import { Router } from 'express';
import tournament from '../models/tournament'
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/tournaments', function(req, res, next) {
  res.json(
    [
    {
      'tournamentName': 'Makers PingPong',
      'players': [
        'James',
        'Harry',
        'Jason',
        'Kofi',
        'Ali',
        'Channelle',
        'Jaques',
        'Marcell'
      ]
    }
  ]
);
});
export default router;
