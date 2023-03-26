import Booking from '../models/Booking.js'

// create booking
export const createBooking = async(req, res) => {

    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({message : "your tour is booked", data: savedBooking})
    } catch (err) {
        res.status(500).json({message : "internal server error"})
    }
}


// get book 
export const getBooking = async(req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)
        res.status(200).json({message : "successfully", data: book})
    } catch (err) {
        res.status(404).json({message : "Not Found"})
    }
}

// get all book 
export const getAllBooking = async(req, res) => {
    const id = req.params.id

    try {
        const books = await Booking.find()
        res.status(200).json({message : "successfully", data: books})
    } catch (err) {
        res.status(500).json({message : "internal server error"})
    }
}