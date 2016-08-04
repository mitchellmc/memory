import {
  describe,
  it,
} from 'mocha';

import {
  expect,
  assert,
} from 'chai';

import {
  generateMemoryCardIds,
} from '../src/generator';

describe('Board Generator Tests', () => {
  describe('Generating a new Memory Board', () => {

    it('generates a populated array of the required length', () => {
      expect(generateMemoryCardIds(0)).to.have.length(0);
      expect(generateMemoryCardIds(200)).to.have.length(200);
      expect(generateMemoryCardIds(-2)).to.have.length(0);
    });
  });

  describe('Updating an immutable Memory Board', () => {
    // it('will run a truthful assert', () => {
    //   expect(true).to.equal(true);
    //   assert.equal(true, true);
    // });
  });
});
