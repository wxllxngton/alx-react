const notifications = require('../../notifications.json');

/**
 * Returns a list of context objects from notifications.json where the author id matches the given userId.
 *
 * @param {string} userId - The user id to match against notification author ids.
 * @returns {Array} An array of context objects where the author's id matches the userId.
 */
const getAllNotificationsByUser = function (userId) {
  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
};

module.exports = getAllNotificationsByUser;
