import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

const wrapper = shallow(<App />);

describe('App Component', () => {
    it('Correct component rendering', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders App-header', () => {
        expect(wrapper.find('div.App-header').exists()).toBe(true);
    });

    it('renders App-body', () => {
        expect(wrapper.find('div.App-body').exists()).toBe(true);
    });

    it('renders App-footer', () => {
        expect(wrapper.find('div.App-footer').exists()).toBe(true);
    });

    it('renders the Notifications component', () => {
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    it('renders the Header component', () => {
        expect(wrapper.find(Header).exists()).toBe(true);
    });

    it('renders the Login component', () => {
        expect(wrapper.find(Login).exists()).toBe(true);
    });

    it('renders the Footer component', () => {
        expect(wrapper.find(Footer).exists()).toBe(true);
    });
});
