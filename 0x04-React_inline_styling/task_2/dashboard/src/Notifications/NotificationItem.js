import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
    render() {
        const { type, value, html, id, markAsRead } = this.props;
        const itemStyle =
            type === 'urgent'
                ? styles.urgentNotification
                : styles.defaultNotification;

        if (value) {
            return (
                <li
                    className={css(itemStyle)}
                    data-notification-type={type}
                    onClick={() => markAsRead(id)}
                >
                    {value}
                </li>
            );
        } else {
            return (
                <li
                    className={css(itemStyle)}
                    data-notification-type={type}
                    dangerouslySetInnerHTML={html}
                    onClick={() => markAsRead(id)}
                ></li>
            );
        }
    }
}

const styles = StyleSheet.create({
    defaultNotification: {
        color: 'var(--color-blue)',
    },
    urgentNotification: {
        color: 'var(--color-red)',
    },
});

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
    markAsRead: () => {},
};

export default NotificationItem;
