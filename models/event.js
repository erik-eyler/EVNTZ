import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Event = new Schema(
  {
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    location: { type: String, required: true },
    title: { type: String, required: true },
    cost: { type: String, required: false },
    details: { type: String, required: true },
    ageGroup: {
      type: String,
      enum: ["All Ages", "18 and over", "16 and over"],
      required: false,
    },
    // imgUrl: {type: String, required: false}
  },
  { timestamps: true }
);

export default mongoose.model("events", Event);
