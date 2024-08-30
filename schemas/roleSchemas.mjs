import mongoose from "mongoose";

const roleSchemas = new mongoose.Schema({
  rolename: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
});

export default mongoose.model("Role", roleSchemas);