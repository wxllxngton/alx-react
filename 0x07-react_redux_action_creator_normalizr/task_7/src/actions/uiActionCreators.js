import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './uiActionTypes';

/**
 * Action creator to log in a user.
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
 * Action creator to log out a user.
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
 * Action creator to display the notification drawer.
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
 * Action creator to hide the notification drawer.
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

/**
 * Action creator for login success.
 *
 * @returns {Object} The action object with type 'LOGIN_SUCCESS'.
 */
export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    };
};

/**
 * Action creator for login failure.
 *
 * @returns {Object} The action object with type 'LOGIN_FAILURE'.
 */
export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    };
};

/**
 * Action creator for initiating a login request. Performs async operation (fetch) to log in the user.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Function} A function that accepts `dispatch` as an argument (Thunk action).
 */
export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));
        return fetch('http://localhost:3000/login-success.json')
            .then((res) => res.json())
            .then((json) => dispatch(loginSuccess()))
            .catch((error) => dispatch(loginFailure()));
    };
};
