import express  from "express";
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from "../controller/userController.js";
import {verifyUser} from '../utils/verfifyToken.js'
const router = express.Router();


//call single user
router.get('/:id',verifyUser, getSingleUser)

//call all user
router.get('/', getAllUser)

//update user
router.put('/:id',verifyUser, updateUser)

// create new user 
router.post('/', createUser)

// update user
router.delete('/:id',verifyUser, deleteUser)

export default router