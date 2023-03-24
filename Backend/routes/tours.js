import express  from "express";

import { createTour, deleteTour, getAllTour, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controller/tourController.js";

const router = express.Router();

import { verifyAdmin } from "../utils/verfifyToken.js";

// create new tour 

router.get('/:id', getSingleTour)
router.get('/', getAllTour)
router.put('/:id',updateTour)
router.post('/', createTour)
router.delete('/:id',deleteTour)
router.get('/search/getTourBySearch', getTourBySearch)
router.get('/search/getFeaturedTours', getFeaturedTours)
router.get('/search/getTourCount', getTourCount)


export default router