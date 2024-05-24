import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'; // ES6
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const btnStyle = {
    top: '1em',
    right: '1em',
    background: 'transparent',
    border: 'none',
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
};

const imgStyle = {
    width: '20px',
    height: '20px',
};

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return (
            this.props.listNotifications.length <
            nextProps.listNotifications.length
        );
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <div className={css(styles.notificationContainer)}>
                <div className={css(styles.menuItem)}>Your notifications</div>
                {this.props.displayDrawer && (
                    <div className={css(styles.notifications)}>
                        <button
                            style={btnStyle}
                            aria-label="Close"
                            onClick={() =>
                                console.log('Close button has been clicked')
                            }
                        >
                            <img
                                src={close_icon}
                                style={imgStyle}
                                alt="close icon"
                            />
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {this.props.listNotifications.length === 0 ? (
                                <NotificationItem
                                    id={0}
                                    value="No new notification for now"
                                    type="no-new"
                                    markAsRead={this.markAsRead}
                                />
                            ) : (
                                this.props.listNotifications.map((list) => (
                                    <NotificationItem
                                        id={list.id}
                                        key={list.id}
                                        type={list.type}
                                        value={list.value}
                                        html={list.html}
                                        markAsRead={this.markAsRead}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

const styles = StyleSheet.create({
    notifications: {
        border: '3px dashed #e1354b',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.5rem',
        width: '25rem',
    },
    defaultNotification: {
        color: 'var(--color-blue)',
    },
    urgentNotification: {
        color: 'var(--color-red)',
    },
    menuItem: {
        marginBottom: '10px',
    },
    notificationContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '12px',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
    },
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;
