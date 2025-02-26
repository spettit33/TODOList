import mongoose from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
  try {
    const dbUri = process.env.MONGO_URI;

    if (!dbUri) {
      console.error('MONGO_URI is not defined in environment variables!');
      process.exit(1);
    }

    await mongoose.connect(dbUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;