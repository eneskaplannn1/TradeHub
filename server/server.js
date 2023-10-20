const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const app = require('./app');
const connectToDatabase = require('./utils/connectDB');

connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log('app running at port 3000');
});
