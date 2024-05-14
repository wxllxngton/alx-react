/**
 * Returns the current full year.
 *
 * @returns {number} The current year.
 */
export const getFullYear = function () {
    return new Date().getFullYear();
};

/**
 * Returns footer copy based on the provided condition.
 *
 * @param {boolean} isIndex - Indicates if it's the index page.
 * @returns {string} The footer copy.
 */
export const getFooterCopy = function (isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
};

/**
 * Returns the following string.
 *
 * @returns {String} The string <strong>Urgent requirement</strong> - complete by EOD
 */
export const getLatestNotification = function () {
    return '<strong>Urgent requirement</strong> - complete by EOD';
};
