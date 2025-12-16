// express js routing

import { Router } from "express";
import { bookController } from "./book.controller";
import { adminOnly, auth } from "../../middlewares/auth.middleware";

const router = Router()

// public routes
router.get('/', bookController.getAllBooks)
router.get('/:id',auth, bookController.getSingleBook)

// admin only routes
router.post('/',auth,adminOnly,  bookController.createBook)
router.put('/:id',auth, adminOnly, bookController.updateBook)
router.delete('/:id',auth, adminOnly, bookController.deleteBook)


export const bookRoutes = router