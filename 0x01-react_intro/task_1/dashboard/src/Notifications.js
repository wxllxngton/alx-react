import React from 'react';
import closeIcon from './close-icon.png';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function NotificationComp() {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    dangerouslySetInnerHTML={{
                        __html: getLatestNotification(),
                    }}
                ></li>
            </ul>
            <button
                onClick={handleButtonClick}
                style={{ position: 'absolute', top: '0', right: '0' }}
                aria-label="Close"
            >
                <img src={closeIcon} alt="Close Icon" />
            </button>
        </div>
    );
}
