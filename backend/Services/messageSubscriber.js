// backend/services/messageSubscriber.js
const Redis = require('redis');
const subscriber = Redis.createClient();

subscriber.subscribe('messageChannel');

subscriber.on('message', (channel, message) => {
  const data = JSON.parse(message);
  console.log('Received message:', data);
  // Batch save or further process in the database
});
