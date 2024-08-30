import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  description: String,
  authorId: mongoose.Types.ObjectId,
});
export default mongoose.model("Book", bookSchema);

/**
 * title
 * description
 * authorId
 * publishDate
 *
 */
