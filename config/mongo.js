module.exports = {
  MONGO_HOSTS: process.env.MONGO_HOSTS || 'localhost:27017',
  MONGO_OPTIONS: process.env.MONGO_OPTIONS || '',
  MONGO_DATABASE: process.env.MONGO_DATABASE || process.env.SERVICE_NAME,
};
