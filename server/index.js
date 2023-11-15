const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const functions = require('firebase-functions');

const app = require('./app');
const connectToDatabase = require('./utils/connectDB');

connectToDatabase();

app.listen(3000, () => {
  console.log('app running at port 3000');
});

exports.api = functions.https.onRequest(app);
