import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from 'components/App.jsx';
import AppService from 'services/AppService.jsx';
import Adapter from 'enzyme-adapter-react-16';

const sinon = require('sinon');

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
    it('gets right string', () => {
      const wrapper = shallow(<App />);
      const text = wrapper.find('div').text();
      expect(text).toEqual('Hello World?');
    });

    it('gets not string', () => {
      sinon.stub(AppService, 'getData').returns('What?');
      const wrapper = shallow(<App />);
      const text = wrapper.find('div').text();
      expect(text).toEqual('What?');
    });
  });