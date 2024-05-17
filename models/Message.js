import { Schema, model } from "mongoose";

const messageSchema = new Schema(
    {
        message: {
            type: String,
            required: "Message is required!",
        },
        userId: {
            type: Number,
            required: "UserId is required!",
        },
        streamerId: {
            type: Number,
            required: "StreamerId is required!",
        },
    },
    {
        timestamps: true,
    }
);

const modelMessage = model("Message", messageSchema);
export const schemaMessage = modelMessage.schema;
export const Message = modelMessage;
