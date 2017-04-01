import React from 'react';
import { shallow } from 'enzyme';
import Route from 'components\Route.js';

describe('<Route />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Route />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "route-component"', function () {
      expect(component.hasClass('route-component')).to.equal(true);
    });
  });
});
