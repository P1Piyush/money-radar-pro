require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');

// Register Plugins
fastify.register(require('@fastify/cors'), { origin: '*' });

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/money-radar-pro')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Register Routes
fastify.register(require('./src/routes/transactions'), { prefix: '/api' });

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3001, host: '0.0.0.0' });
    console.log(`🚀 Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();