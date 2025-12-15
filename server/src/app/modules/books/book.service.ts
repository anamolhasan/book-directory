// logic implementation

import { IBook } from "./book.interface";
import { Book } from "./book.model";

const getBooks = async () => {
  const result = await Book.find();
  return result;
};

const createNewBook = async (data: IBook) => {
  const result = await Book.create(data);
};

const updateBook = async (id: string, data: IBook) => {
  const result = await Book.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const bookService = {
  getBooks,
  createNewBook,
  updateBook,
};
