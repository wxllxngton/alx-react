import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import propTypes from 'prop-types';

class Notification extends Component {
    // function that logs notification id to console
    markAsRead(id) {
        console.log(`Notification ${id} has been read`);
    }

    // function that makes the file only update when next listNotifications is longer than current
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.listNotifications.length >
            this.props.listNotifications.length
        );
    }

    render() {
        // assign props to local variables
        const { listNotifications, displayDrawer } = this.props;

        return (
            <>
                {!displayDrawer && (
                    <p className={css(styles.menuItem)}>Your notifications</p>
                )}
                {displayDrawer && (
                    <div className={css(styles.notifications)}>
                        <button
                            style={{
                                position: 'absolute',
                                background: 'transparent',
                                border: 'none',
                                right: '20px',
                            }}
                            aria-label="close"
                            onClick={() => {
                                console.log('Close button has been clicked');
                            }}
                        >
                            <img
                                src={close_icon}
                                className={css(styles.x_button)}
                                alt="close"
                                height="15px"
                                width="15px"
                            ></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {/* listNotifications is empty condition */}
                            {listNotifications.length === 0 && (
                                <li>
                                    <p>No notification available yet</p>
                                </li>
                            )}
                            {/* render listNotifications */}
                            {listNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    markAsRead={this.markAsRead}
                                    id={notification.id}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

const bounce = {
    '0%': {
        transform: 'translateY(0px)',
    },
    '50%': {
        transform: 'translateY(-5px)',
    },
    '100%': {
        transform: 'translateY(5px)',
    },
};

const fadeIn = {
    '0%': {
        opacity: 0.5,
    },
    '100%': {
        opacity: 1,
    },
};

const styles = StyleSheet.create({
    notifications: {
        '@media (min-width: 350px)': {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            background: 'white',
            fontSize: '20px',
        },
    },

    x_button: {
        '@media (min-width: 350px)': {
            position: 'absolute',
            top: '15px',
            right: '10px',
        },
    },

    menuItem: {
        position: 'absolute',
        top: '0px',
        right: '15px',
        backgroundColor: '#fff8f8',
        cursor: 'pointer',
        ':hover': {
            animationName: [fadeIn, bounce],
            animationDuration: '1s, 0.5s',
            animationIterationCount: '3, 3',
        },
    },
});

Notification.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notification.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape),
};

export default Notification;
