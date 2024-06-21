import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Creates an action to mark a notification as read.
 *
 * @param {number} index - The index of the notification to mark as read.
 * @returns {Object} The action object with type 'MARK_AS_READ' and the notification index.
 */
export const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index,
    };
};

/**
 * Bound action creator for marking a notification as read. Dispatches the markAsRead action.
 *
 * @param {number} index - The index of the notification to mark as read.
 */
export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

/**
 * Creates an action to set the notification filter type.
 *
 * @param {string} filter - The filter type for notifications ('all', 'read', 'unread').
 * @returns {Object} The action object with type 'SET_TYPE_FILTER' and the filter type.
 */
export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};

/**
 * Bound action creator for setting the notification filter type. Dispatches the setNotificationFilter action.
 *
 * @param {string} filter - The filter type for notifications ('all', 'read', 'unread').
 */
export const boundSetNotificationFilter = (filter) =>
    dispatch(setNotificationFilter(filter));
