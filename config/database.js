import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected && mongoose.connections[0]?.readyState === 1) {
    console.log("MongoDB is already connected");
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    connected = false;
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
