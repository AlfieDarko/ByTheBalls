import Match from '../src/Match';
import Player from '../src/Player';

jest.mock('../src/Player');
beforeAll(() => {
  Player.mockImplementationOnce(() => {
    return {
      isFirstMatchWinner: () => {
        return true;
      },
    };
  });
});

const player1 = new Player();
const player2 = new Player();

describe('Match', () => {
  let match = new Match(player1, player2);
  describe('When instantiated with 2 player classes', () => {
    describe('.setFirstMatchWinner()', () => {
      it('Should call the .winFirstMatch() on selected player1 class instance', () => {
        match.setFirstMatchWinner(player1);
        expect(player1.winFirstMatch).toHaveBeenCalledTimes(1);
      });

      it('Should NOT call the .winFirstMatch() on the player2 class instance', () => {
        match.setFirstMatchWinner(player1);
        expect(player2.winFirstMatch).not.toHaveBeenCalled;
      });
    });

    describe('.setSemiFinalMatchWinner()', () => {
      it('Should call the .winSemiFinalMatch() on selected player1 class instance', () => {
        match.setSemiFinalMatchWinner(player1);
        expect(player1.winSemiFinalMatch).toHaveBeenCalledTimes(1);
      });

      it('Should NOT call the .winSemiFinalMatch() on the player2 class instance', () => {
        match.setSemiFinalMatchWinner(player1);
        expect(player2.winSemiFinalMatch).not.toHaveBeenCalled;
      });
    });

    describe('.setFinalMatchWinner()', () => {
      it('Should call the .winFinalMatch() on selected player1 class instance', () => {
        match.setFinalMatch(player1);
        expect(player1.winFinalMatch).toHaveBeenCalledTimes(1);
      });

      it('Should NOT call the .winFinalMatch() on the player2 class instance', () => {
        match.setFinalMatch(player1);
        expect(player2.winFinalMatch).not.toHaveBeenCalled;
      });
    });

    describe('.getFirstMatchWinner()', () => {
      it('should return player1 after player is set as the winner', () => {
        match.setFirstMatchWinner(player1);
        expect(match.getFirstMatchWinner()).toBe(player1);
      });
    });

    describe('.getSemiFinalMatchWinner()', () => {
      it('should return player1 after player is set as the winner', () => {
        match.setSemiFinalMatchWinner(player1);
        expect(match.getFirstMatchWinner()).toBe(player1);
      });
    });

    describe('..getFinalMatchWinner()()', () => {
      it('should call .getFinalMatchWinner on the player1 class instance', () => {
        match.setSemiFinalMatchWinner(player1);
        expect(match.getFinalMatchWinner()).toBe(player1);
      });
    });
  });
});
