import express from "express";
import bookRoutes from "./router/bookRoutes.mjs";

const app = express();

app.use("/api/books", bookRoutes);

export default app;
