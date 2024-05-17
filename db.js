//const dbURI = 'mongodb://root:root123@localhost:27017';
//console.log('DB Connection to:', dbURI);
/*mongoose.connect(dbURI, { dbName: 'basic', useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));*/

//Model Setup
require("./models/Customer");
require("./models/Message");