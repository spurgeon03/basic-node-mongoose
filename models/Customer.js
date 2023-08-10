const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: "Email is required!",
        },
        name: {
            type: String,
            required: "Name is required!",
        },
        age: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Customer", customerSchema);
