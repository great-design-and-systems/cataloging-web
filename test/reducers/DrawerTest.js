var reducer = require('../../src/reducers/Drawer');
var actionTypes = require('../../src/actions/const');
describe('Drawer', () => {

  it('should turn the state.toggle to true', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: actionTypes.DRAWER_TOGGLE});

    done();
  });
});
