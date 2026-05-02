require('dotenv').config();
const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/cors'), { origin: '*' });

fastify.get('/api/health', async (request, reply) => {
  return { status: 'ok', message: 'Money-Radar-Pro API is live!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();