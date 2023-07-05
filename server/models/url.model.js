import mongoose from "mongoose";
const { Schema } = mongoose;

//Define Schema
const UrlSchema = new Schema(
  {
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  { collection: "url" }
);

export default mongoose.model("Url", UrlSchema);
