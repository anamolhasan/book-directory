// business logic

import { NextFunction, Request, Response } from "express";
import { bookService } from "./book.service";

const getAllBooks = async(req: Request, res: Response, next: NextFunction) => {
  try {

    const books = await  bookService.getBooks()

    res.status(200).json(books)

  } catch (error: any) {
      next(error)
  }
};



const createBook = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const bookData = req.body
        const books = await bookService.createNewBook(bookData)

        res.status(200).json({
            message:'Book created successfully',
            books,
        })
    } catch (error:any) {
        next(error)
    }
}

export const bookController = {
    getAllBooks,
    createBook,
}
