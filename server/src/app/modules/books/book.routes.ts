// express js routing

import { Router } from "express";
import { bookController } from "./book.controller";

const router = Router()

// public routes
router.get('/', bookController.getAllBooks)
router.get('/:id', bookController.getSingleBook)

// admin only routes
router.post('/', bookController.createBook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)


export const bookRoutes = router