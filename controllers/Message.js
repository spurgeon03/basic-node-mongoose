// controllers/Message.js
import { Message } from "../models/Message.js";

// Controller function to register a new message
export async function createMessage(req, res) {
    try {
        const { message, userId, streamerId } = req.body;

        // Create a new message instance
        const newMessage = new Message({
            message,
            userId,
            streamerId,
        });

        // Save the new message to the database
        await newMessage.save();

        res.status(201).json({ message: "Message send successfully.", send: newMessage });
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getMessagesByStreamerId(req, res) {
    try {
        const { streamerId } = req.body;

        // get all messages by streamer id
        const messages = await Message.find({ streamerId }).exec();

        res.status(200).json({ messages });
    } catch (error) {
        console.error("Error getting messages:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
