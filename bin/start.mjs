import app from "../app.mjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  await mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`);
  const server = app.listen(process.env.PORT || 3000, () => {
    const { port } = server.address();
    console.log(`SERVER START ON PORT => ${port}`);
  });
} catch (err) {
  const { message } = err;
  console.error(message);
  process.exit(1);
}