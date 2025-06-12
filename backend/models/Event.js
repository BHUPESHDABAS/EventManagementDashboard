import mongoose from "mongoose";
import User from "../models/User.js";

const eventSchema = new mongoose.Schema({
    eventHeading: {
        type: String,
        required: true
    },
    eventImageUrl: {
        type: String,
        required: true
    },
    eventOrganiser: {
        type: String,
        required: true
    }
    
})

export default mongoose.model("Events", eventSchema);