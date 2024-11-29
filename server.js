/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */

const express = require("express");
const bodyParser = require("body-parser");
const Order = require("./Order");

const app = express();
const port = 3005;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory array to store orders
let coffeeOrders = [];

// Route to get all coffee orders
app.get("/orders", (req, res) => {
  res.json(coffeeOrders);
});

// Route to place a new order
// app.post("/order", (req, res) => {
//   const { name, type, size } = req.body;

//   // Create a new order instance
//   const order = new Order(name, type, size, amount);

//   // Validate the order
//   const validation = order.validate();
//   if (!validation.valid) {
//     return res.status(400).json({ message: validation.message });
//   }

//   // Add the new order to the orders array
//   coffeeOrders.push(order);

//   res.status(201).json({
//     message: "Order placed successfully",
//     order: order.toJSON(), // Return a plain object for easier response formatting
//   });
// });

// Route to delete an order by index
// app.delete("/order/:index", (req, res) => {
//   const index = parseInt(req.params.index, 10);

//   if (isNaN(index) || index < 0 || index >= coffeeOrders.length) {
//     return res.status(400).json({ message: "Invalid order index" });
//   }

//   // Remove the order from the array
//   const removedOrder = coffeeOrders.splice(index, 1);
//   res.json({
//     message: "Order removed successfully",
//     order: removedOrder[0].toJSON(),
//   });
// });

// Start the server
app.listen(port, () => {});
