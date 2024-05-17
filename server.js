import express from "express";
import mongoose from "mongoose";
import { createMessage } from "./controllers/Message.js";

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup routes

app.use(async (req, res, next) => {
  try {
    console.log('Init Connection');

    const dbURI = 'mongodb+srv://crazystreamclan:4EHKlZgLukrPXbg7@cscluster.281rwfn.mongodb.net/';
    
    await mongoose.connect(dbURI, { 
      dbName: 'basic', 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      maxIdleTimeMS: 60000,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));
      next();
  } catch (err) {
      next(err);
  }
});

const router = express.Router();
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

router.post("/send", createMessage);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is listening on port with love ${port}`);
});
