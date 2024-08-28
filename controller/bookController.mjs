const getAllBook = (req, res, next) => {
  res.status(200).json("From all Book");
};

const byIsbn = (req, res, next) => {
  res.status(200).json("All Book By Isbn");
};

const byAuthor = (req, res, next) => {
  res.status(200).json("All Book By Author");
};

const byTitle = (req, res, next) => {
  res.status(200).json("All Books By Title");
};

const book = { getAllBook, byIsbn, byAuthor,byTitle};
export default book;
