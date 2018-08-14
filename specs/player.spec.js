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
      it('Should start with eql null', () => {
        expect(player.wonFirstMatch).toBe(null);
      });
    });

    describe('this.wonSemiFinalMatch', () => {
      it('should start with eql null', () => {
        expect(player.wonSemiFinalMatch).toBe(null);
      });
    });

    describe('this.wonFinalMatch', () => {
      it('should start with eql null', () => {
        expect(player.wonFinalMatch).toBe(null);
      });
    });

    describe('.winFirstMatch()', () => {
      describe('When executed', () => {
        it('Should set .wonFirstMatch property as true', () => {
          player.winFirstMatch();
          expect(player.wonFirstMatch).toBe(true);
        });
      });
    });

    describe('.winSemiFinalMatch()', () => {
      describe('when executed', () => {
        it('Should set .wonSemiFinalMatch property as true', () => {
          player.winSemiFinalMatch();
          expect(player.wonSemiFinalMatch).toBe(true);
        });
      });
    });

    describe('.winFinalMatch()', () => {
      describe('when executed', () => {
        it('Should set .wonFinalMatch property as true', () => {
          player.winFinalMatch();
          expect(player.wonFinalMatch).toBe(true);
        });
      });
    });


    });
  });
});
