import mongoose from "mongoose";

let isConnected = false; // check if mongoose is connected

export default async function connectToDB() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log("MongoDB URI not found");
  }

  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;

    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};
