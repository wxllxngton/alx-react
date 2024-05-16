import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render the App-login', () => {
        expect(wrapper.find('div.App-login').exists()).toBe(true);
    });

    it('should render 2 input tags', () => {
        expect(wrapper.find('input').length).toBe(2);
    });

    it('should render 2 label tags', () => {
        expect(wrapper.find('label').length).toBe(2);
    });
});
