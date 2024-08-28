import express from "express";
import booksController from "../controller/bookController.mjs";

const router = express.Router();
const { getAllBook, byIsbn, byAuthor, byTitle } = booksController;


/* GET ROUTE */
router.get("/", getAllBook);
router.get("/:isbn/byIsbn", byIsbn);
router.get("/:author/byAuthor", byAuthor);
router.get("/:title/byTitle", byTitle);

export default router;