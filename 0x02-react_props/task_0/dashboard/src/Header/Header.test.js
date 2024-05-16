import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render the App-header', () => {
        expect(wrapper.find('div.App-header').exists()).toBe(true);
    });

    it('should render an img tag with the class App-logo', () => {
        expect(wrapper.find('img.App-logo').exists()).toBe(true);
    });

    it('should render an h1 tag', () => {
        expect(wrapper.find('h1').exists()).toBe(true);
    });
});
