import React from 'react';
import logo from '../assets/holbertonlogo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <header className={(css(styles.header), 'App-header')}>
            <img
                src={logo}
                className={(css(styles.logo), 'App-logo')}
                alt="logo"
            />
            <h1>School dashboard</h1>
        </header>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '200px',
        height: '200px',
    },

    header: {
        backgroundColor: 'var(--color-white)',
        borderBottom: '3px solid var(--color-hb)',
        height: '200px',
        h1: {
            display: 'inline',
            position: 'relative',
            top: '-6rem',
            color: 'var(--color-hb)',
        },
    },
});

export default Header;
