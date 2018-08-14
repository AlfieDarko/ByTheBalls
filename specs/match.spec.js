import Match from '../src/Match';
import Player from '../src/Player';

jest.mock('../src/Player');
const player1 = new Player();
const player2 = new Player();

// beforeAll(() => {
//   Player.mockImplementation(() => {
//     return {
//       winFirstMatch: () => {},
//     };
//   });
// });

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
  });
});
