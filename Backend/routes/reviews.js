import express  from "express";

const router = express.Router();

import { createReview } from "../controller/reviewController.js";
import { verifyUser } from "../utils/verfifyToken.js";
//call single user
router.post('/:tourId', createReview)

export default router