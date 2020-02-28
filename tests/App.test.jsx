import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from 'components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
    it('gets right string', () => {
      const wrapper = shallow(<App />);
      const text = wrapper.find('div').text();
      expect(text).toEqual('Hello World?');
    });
  });