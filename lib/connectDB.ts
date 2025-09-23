import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URI}`);

    console.log(`Successfully connected to RWV DB`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Failed to connect to the database.");
  }
};
