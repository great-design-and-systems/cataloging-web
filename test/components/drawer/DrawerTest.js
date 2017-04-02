import React from 'react';
import { shallow } from 'enzyme';
import Drawer from 'components\drawer\Drawer.js';

describe('<Drawer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Drawer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "drawer-component"', function () {
      expect(component.hasClass('drawer-component')).to.equal(true);
    });
  });
});
