const mongoose = require('mongoose');
const dbURI = 'mongodb://0.0.0.0:27017/your-database-name';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

//Model Setup
require("./models/Customer")