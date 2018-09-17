import Tournament from '../src/Tournament';

describe('Tournament', () => {
  describe('.getName()', () => {
    it('should return the correct name property', () => {
      const TOURNAMENT_NAME = 'MakersPingPong';
      let tournament = new Tournament(TOURNAMENT_NAME);
      expect(tournament.getName()).toBe(TOURNAMENT_NAME);
    });
  });
});
