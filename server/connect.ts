import mongoose from 'mongoose';

const connectDB = async () => {
  const username = process.env.MONGO_USER || 'admin';
  const password = process.env.MONGO_PASS || 'password';
  const host = process.env.MONGO_HOST || 'localhost';
  const port = process.env.MONGO_PORT || '27017';
  const dbName = process.env.MONGO_DB || 'newsdb';
  const authSource = process.env.MONGO_AUTH_SOURCE || 'admin';

  const uri = `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=${authSource}`;

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(' Failed to connect MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;
