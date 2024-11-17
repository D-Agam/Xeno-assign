// backend/services/messagePublisher.js
const Redis = require('redis');
const publisher = Redis.createClient();

exports.publishMessage = (message) => {
  publisher.publish('messageChannel', JSON.stringify(message));
};
