import {
  describe,
  it,
} from 'mocha';

import {
  expect,
  assert,
} from 'chai';

describe('Bootstrap Tests', () => {
  it('will run a truthful test', () => {
    return true;
  });

  it('will run a truthful expect', () => {
    expect(true).to.equal(true);
  });

  it('will run a truthful assert', () => {
    assert.equal(true, true);
  });
});
