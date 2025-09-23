import mongoose, { models, Schema } from "mongoose";

const RsvpSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    attending: {
      type: String,
      enum: ["Yes", "No", "Maybe"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rsvp = models.Rsvp || mongoose.model("Rsvp", RsvpSchema, "rsvps");

export default Rsvp;
