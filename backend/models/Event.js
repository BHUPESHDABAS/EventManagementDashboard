import mongoose from "mongoose";
import User from "../models/User.js";

const eventSchema = new mongoose.Schema({
  eventHeading: {
    type: String,
    required: true,
  },
  eventImageUrl: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true
  },
  eventOrganiser: {
    type: String,
    ref: "User"
  },
});

eventSchema.pre("save", async function (next) {
  if (!this.eventOrganiser) {
    const admin = await User.findOne({ email: "infiniteLocus@gmail.com" });
    if (!admin) {
      return next(new Error("Admin user not found"));
    }
    this.eventOrganiser = admin._id;
  }
  next();
});

export default mongoose.model("Events", eventSchema);
