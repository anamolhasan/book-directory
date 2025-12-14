// express js routing

import { Router } from "express";
import { bookController } from "./book.controller";

const router = Router()

// public routes
router.get('/', bookController.getAllBooks)

// admin only routes
router.post('/', bookController.createBook)

export const bookRoutes = router