import React, { Component } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export default function Footer(props) {
    return (
        <div className="App-footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy()}
            </p>
        </div>
    );
}
