import express  from "express";

const router = express.Router();

import { createBooking, getAllBooking, getBooking } from "../controller/bookingController.js";
import { verifyUser, verifyAdmin } from "../utils/verfifyToken.js";
//call single user
router.post('/',verifyUser, createBooking)
router.get('/:id',verifyUser, getBooking)
router.get('/',verifyAdmin, getAllBooking)

export default router