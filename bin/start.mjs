import app from "../app.mjs";
import dotenv from "dotenv";
dotenv.config();

const server = app.listen(process.env.PORT || 3000, () => {
  const { port } = server.address();
  console.log(`SERVER START ON PORT => ${port}`);
});
