const MONGO_URL =
  "mongodb+srv://ninikela:ninikela@nextjsapp.toz7g3a.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URL);
    if (connection.readyState === 1) {
      console.log(`Connected`);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongoDB;
