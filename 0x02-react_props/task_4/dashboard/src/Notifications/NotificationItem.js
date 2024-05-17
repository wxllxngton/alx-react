import React from 'react';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

export function AllNotifyItems() {
    return (
        <React.Fragment>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
                type="urgent"
                html={{ __html: getLatestNotification() }}
            />
        </React.Fragment>
    );
}

export default function NotificationItem({ type, html, value }) {
    if (html === undefined) return <li data-priority={type}>{value}</li>;
    return <li data-priority={type} dangerouslySetInnerHTML={html}></li>;
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
    type: 'default',
};
