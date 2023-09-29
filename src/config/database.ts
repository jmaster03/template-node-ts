import mongoose, { ConnectionOptions} from 'mongoose';

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  user: process.env.DB_USERNAME,
  pass:  process.env.DB_PASSWORD
};


mongoose.connect(process.env.DB_HOST || 'mongodb://localhost/ionicjwttutorial', dbOptions);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongodb Connection stablished');
});

connection.on('error', (err) => {
  console.log('Mongodb connection error:', err);
  process.exit();
});