// routes/Customer.js
import express from "express";

const router = express.Router();
//const messageController = require("../controllers/Message"); // Import the customer controller

// Define route for registering a new customer

router.get("/", async (req, res) => {
  try {
    return res.status(200).send(
      `<!DOCTYPE html>
      <html lang="en">

      <head>
          <title>Back testing</title>
      </head>

      <body>
          <h1>What are you doing here?</h1>
      </body>

      </html>`
    );
  } catch (e) {
    return res.send(e);
  }
});

//router.post("/send", messageController.createMessage);

export const routesApi = () => router;

