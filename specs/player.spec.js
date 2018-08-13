import Player from '../src/Player';

describe('Player Class', () => {
  const NAME = 'Jack';
  const FAKE_NAME = 'Jackson';
  let player = new Player(NAME);

  describe('When instantiated with a string', () => {
    it('Should hold that string under the name property', () => {
      expect(player.name).toBe(NAME);
    });
    it('Shouldnt return a string that we did not enter', () => {
      expect(player.name).not.toBe(FAKE_NAME);
    });
  });

  describe('When instantiated ', () => {
    describe('this.wonFirstMatch', () => {
      it('Should eql null', () => {
        expect(player.wonFirstMatch).toBe(null);
      });
    });
  });
});
