const Transaction = require('../models/Transaction');

async function routes(fastify, options) {
  // Health check
  fastify.get('/health', async () => ({ status: 'ok' }));

  // Get all transactions
  fastify.get('/transactions', async (request, reply) => {
    return Transaction.find().sort({ date: -1 });
  });

  // Create transaction
  fastify.post('/transactions', async (request, reply) => {
    const transaction = new Transaction(request.body);
    await transaction.save();
    return transaction;
  });

  // AI Insights Placeholder
  fastify.post('/ai/insights', async (request, reply) => {
    const transactions = await Transaction.find().limit(20);
    // Logic for Gemini Pro to analyze these would go here
    return { 
        insight: "Your spending in 'Dining Out' increased by 20% this week. Try cooking at home to save ~$50.",
        action: "Create a 'Grocery' budget"
    };
  });
}

module.exports = routes;