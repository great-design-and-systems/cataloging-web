var reducer = require('../../src/reducers/ApiReducer');

describe('ApiReducer', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, { type: 'INVALID' });

    done();
  });
});
