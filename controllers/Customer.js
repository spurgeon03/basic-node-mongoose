// controllers/Customer.js

const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");

// Controller function to register a new customer
exports.registerCustomer = async (req, res) => {
    try {
        const { email, name, age } = req.body;

        // Check if the customer already exists based on email
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ message: "Customer already exists with this email." });
        }

        // Create a new customer instance
        const newCustomer = new Customer({
            email,
            name,
            age,
        });

        // Save the new customer to the database
        await newCustomer.save();

        res.status(201).json({ message: "Customer registered successfully.", customer: newCustomer });
    } catch (error) {
        console.error("Error registering customer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
