/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory array to store orders
let coffeeOrders = [];

// Route to get all coffee orders
app.get('/orders', (req, res) => {
  res.json(coffeeOrders);
});

// Route to place a new order
app.post('/order', (req, res) => {
  const { name, type, size } = req.body;

  if (!name || !type || !size) {
    return res.status(400).json({ message: 'Please provide name, type, and size for the order' });
  }

  // Add the new order to the orders array
  const newOrder = { name, type, size };
  coffeeOrders.push(newOrder);

  res.status(201).json({
    message: 'Order placed successfully',
    order: newOrder
  });
});

// Route to delete an order by index (simple version)
app.delete('/order/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);

  if (isNaN(index) || index < 0 || index >= coffeeOrders.length) {
    return res.status(400).json({ message: 'Invalid order index' });
  }

  // Remove the order from the array
  const removedOrder = coffeeOrders.splice(index, 1);
  res.json({
    message: 'Order removed successfully',
    order: removedOrder[0]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
