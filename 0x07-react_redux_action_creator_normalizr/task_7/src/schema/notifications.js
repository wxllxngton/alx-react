const { normalize, schema } = require('normalizr');
const notificationsData = require('../../notifications.json');

import { normalized } from './notifications';

/**
 * Returns a list of message objects from normalized data where the author id matches the given userId.
 *
 * @param {string} userId - The user id to match against notification author ids.
 * @returns {Array} An array of message objects where the author's id matches the userId.
 */
export const getAllNotificationsByUser = (userId) => {
    const notifications = normalized.entities.notifications;
    const messages = normalized.entities.messages;
    const notificationsByUser = [];

    for (const id in notifications) {
        if (notifications[id].author === userId) {
            notificationsByUser.push(messages[notifications[id].context]);
        }
    }

    return notificationsByUser;
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
