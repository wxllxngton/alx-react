import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the App-footer', () => {
        expect(wrapper.find('div.App-footer').exists()).toBe(true);
    });

    it('should render the text "Copyright"', () => {
        expect(wrapper.text()).toContain('Copyright');
    });
});
