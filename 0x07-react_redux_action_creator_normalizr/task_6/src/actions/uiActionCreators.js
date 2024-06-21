import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/**
 * Creates an action to log in a user.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Object} The action object with type 'LOGIN' and the user credentials.
 */
export const login = (email, password) => {
    return {
        type: LOGIN,
        user: { email, password },
    };
};

/**
 * Bound action creator for logging in a user. Dispatches the login action.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 */
export const boundLogin = (email, password) => dispatch(login(email, password));

/**
 * Creates an action to log out a user.
 *
 * @returns {Object} The action object with type 'LOGOUT'.
 */
export const logout = () => {
    return {
        type: LOGOUT,
    };
};

/**
 * Bound action creator for logging out a user. Dispatches the logout action.
 */
export const boundLogout = () => dispatch(logout());

/**
 * Creates an action to display the notification drawer.
 *
 * @returns {Object} The action object with type 'DISPLAY_NOTIFICATION_DRAWER'.
 */
export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
};

/**
 * Bound action creator for displaying the notification drawer. Dispatches the displayNotificationDrawer action.
 */
export const boundDisplayNotificationDrawer = () =>
    dispatch(displayNotificationDrawer());

/**
 * Creates an action to hide the notification drawer.
 *
 * @returns {Object} The action object with type 'HIDE_NOTIFICATION_DRAWER'.
 */
export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    };
};

/**
 * Bound action creator for hiding the notification drawer. Dispatches the hideNotificationDrawer action.
 */
export const boundHideNotificationDrawer = () =>
    dispatch(hideNotificationDrawer());
