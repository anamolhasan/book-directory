// business logic

import { NextFunction, Request, Response } from "express";
import { bookService } from "./book.service";
import { Book } from "./book.model";


// get all book
const getAllBooks = async(req: Request, res: Response, next: NextFunction) => {
  try {

    const books = await  bookService.getBooks()

    res.status(200).json(books)

  } catch (error: any) {
      next(error)
  }
};

// get single book by id
const getSingleBook = async (req:Request, res:Response, next:NextFunction) => {
   try {
     const {id} = req.params
     const book = await Book.findById(id)

     if(!book){
      res.status(404).json({
        message:'Book not found'
      })
      return
     }
     res.status(200).json(book)
   } catch (error:any) {
     next(error)
   }
}

// get create book
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

// update book info
const updateBook = async(req:Request, res:Response, next:NextFunction) => {
  try {
    const bookId = req.params.id as string
    const bookData = req.body

    const updateBook = await bookService.updateBook(bookId, bookData)
    res.status(200).json({
      message:'Book updated successfully',
      updateBook
    })
  } catch (error) {
    next(error)
  }
}

const deleteBook = async (req:Request, res:Response, next:NextFunction) => {
   try {
     const book = await Book.findByIdAndDelete(req.params.id)
     if(!book){
      res.status(404).json({
        message:'Book not found'
      })
     }
     res.status(200).json({
      message:'Book delete successfully',
      
     })
   } catch (error:any) {
      next(error)
   }
}

export const bookController = {
    getAllBooks,
    createBook,
    getSingleBook,
    updateBook,
    deleteBook
}
