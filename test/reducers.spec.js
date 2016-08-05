import {
  describe,
  it,
} from 'mocha';

import {
  expect,
  assert,
} from 'chai';

import {
  memoryboard,
  openCards,
} from '../src/reducers';

import {
  SET_BOARD_6,
  SET_BOARD_12,
  SET_BOARD_16,
  SET_BOARD_20,
  SET_BOARD_30,
  TURN_CARD,
  CLEAR_OPEN_CARDS,
  MATCH_OPEN_CARDS,
  FACING_DOWN,
  FACING_UP,
  SOLVED,
} from '../src/constants';


describe('Reducers', () => {
  describe('memoryboard', () => {
    const stateBefore = [
      [
        { cardId: 3, status: FACING_DOWN },
        { cardId: 4, status: FACING_DOWN },
        { cardId: 5, status: FACING_DOWN },
      ],
      [
        { cardId: 5, status: FACING_DOWN },
        { cardId: 4, status: FACING_DOWN },
        { cardId: 3, status: FACING_DOWN },
      ],
    ];

    it('handles a null/undefined state and action', () => {
      expect(memoryboard(null, { type: 'HAHA' })).to.have.length(2);
      expect(memoryboard(undefined, { type: 'HAHA' })).to.have.length(2);
      expect(memoryboard([], undefined)).to.have.length(2);
    });

    it('handles an action for which a type case is not defined', () => {
      expect(memoryboard([], { type: 'SET_BOARD_51' })).to.have.length(2);
    });

    it('generates a memoryboard with 6 squares', () => {
      expect(memoryboard([], { type: SET_BOARD_6 })).to.have.length(2);
    });

    it('generates a memoryboard with 12 squares', () => {
      expect(memoryboard([], { type: SET_BOARD_12 })).to.have.length(3);
    });

    it('generates a memoryboard with 16 squares', () => {
      expect(memoryboard([], { type: SET_BOARD_16 })).to.have.length(4);
    });

    it('generates a memoryboard with 20 squares', () => {
      expect(memoryboard([], { type: SET_BOARD_20 })).to.have.length(4);
    });

    it('generates a memoryboard with 30 squares', () => {
      expect(memoryboard([], { type: SET_BOARD_30 })).to.have.length(5);
    });

    it('flips a card to show its id/number/image', () => {
      const stateAfter = [
        [
          { cardId: 3, status: FACING_DOWN },
          { cardId: 4, status: FACING_DOWN },
          { cardId: 5, status: FACING_DOWN },
        ],
        [
          { cardId: 5, status: FACING_DOWN },
          { cardId: 4, status: FACING_UP },
          { cardId: 3, status: FACING_DOWN },
        ],
      ];
      expect(stateAfter).to.deep.equal(memoryboard(stateBefore,
        {
          type: TURN_CARD,
          row: 1,
          column: 1,
          status: FACING_UP
        }
      ));
    });

    it('updates memoryboard state when two flipped cards have same id/image', () => {
      const stateAfter = [
        [
          { cardId: 3, status: FACING_DOWN },
          { cardId: 4, status: FACING_DOWN },
          { cardId: 5, status: SOLVED },
        ],
        [
          { cardId: 5, status: FACING_DOWN },
          { cardId: 4, status: FACING_DOWN },
          { cardId: 3, status: SOLVED },
        ],
      ];
      expect(stateAfter).to.deep.equal(memoryboard(stateBefore,
        {
          type: MATCH_OPEN_CARDS,
          openCards: [
            { row: 0, column: 2 },
            { row: 1, column: 2 },
          ],
        }
      ));
    });

    it('updates memoryboard state when two flipped cards have different id/image', () => {
      const stateAfter = [
        [
          { cardId: 3, status: FACING_DOWN },
          { cardId: 4, status: FACING_DOWN },
          { cardId: 5, status: FACING_DOWN },
        ],
        [
          { cardId: 5, status: FACING_DOWN },
          { cardId: 4, status: FACING_DOWN },
          { cardId: 3, status: FACING_DOWN },
        ],
      ];
      expect(stateAfter).to.deep.equal(memoryboard(stateBefore,
        {
          type: CLEAR_OPEN_CARDS,
          openCards: [
            { row: 0, column: 0 },
            { row: 1, column: 2 },
          ],
        }
      ));
    });
  });

  describe('openCards', () => {
    it();
  });
});
