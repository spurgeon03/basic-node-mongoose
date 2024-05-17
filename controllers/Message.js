// controllers/Message.js

import { Message } from "../models/Message.js";

// Controller function to register a new customer
export async function createMessage(req, res) {
    try {
        const { message, userId, streamerId } = req.body;

        // Create a new customer instance
        const newMessage = new Message({
            message,
            userId,
            streamerId,
        });

        // Save the new customer to the database
        await newMessage.save();

        res.status(201).json({ message: "Message send successfully.", send: newMessage });
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
