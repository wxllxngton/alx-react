const { normalize, schema } = require('normalizr');
const notificationsData = require('../../notifications.json');

/**
 * Returns a list of context objects from notifications.json where the author id matches the given userId.
 *
 * @param {string} userId - The user id to match against notification author ids.
 * @returns {Array} An array of context objects where the author's id matches the userId.
 */
const getAllNotificationsByUser = function (userId) {
    return notificationsData
        .filter((notification) => notification.author.id === userId)
        .map((notification) => notification.context);
};

module.exports = getAllNotificationsByUser;

// Define user entity schema
const user = new schema.Entity('users');

// Define message entity schema with 'guid' as the ID attribute
const message = new schema.Entity(
    'messages',
    {},
    {
        idAttribute: 'guid',
    }
);

// Define notification entity schema with relationships to user and message
const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

// Normalize the notifications data
const normalized = normalize(notificationsData, [notification]);

// Export the normalized data
module.exports.normalized = normalized;
