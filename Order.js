class Order {
  constructor(name, type, size, amount) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.amount = amount;
    this.status = "Pending"; // Default status is 'Pending'
    this.createdAt = new Date(); // Timestamp of when the order was created
  }

  // Method to validate the order
  validate() {
    if (!this.name || !this.type || !this.size) {
      return {
        valid: false,
        message: "Please provide name, type, and size for the order.",
      };
    }

    // Additional validation logic can go here (e.g., checking valid types or sizes)
    return { valid: true };
  }

  // Method to update the status of an order
  updateStatus(newStatus) {
    const validStatuses = ["Pending", "Completed", "Cancelled"];
    if (validStatuses.includes(newStatus)) {
      this.status = newStatus;
      return true;
    }
    return false;
  }

  // Method to return a plain object (for easier JSON serialization)
  toJSON() {
    return {
      name: this.name,
      type: this.type,
      size: this.size,
      status: this.status,
      amount: this.amount,
      createdAt: this.createdAt,
    };
  }
}

module.exports = Order;
