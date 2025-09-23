import mongoose from "mongoose";

export const disconnectFromDB = async () => {
  try {
    await mongoose
      .disconnect()
      .then(() => console.log("Disconnected from DB Successfully"));
  } catch (error) {
    console.log("Not able to Disconnect Due to error :" + error);
  }
};
