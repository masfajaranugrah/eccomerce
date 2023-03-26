import User from "../models/User.js";

// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  
  try {
    const sevedUser = await newUser.save();

    res.status(200)
    .json({ 
        message: "Successfully created",
        data : sevedUser
    });
  } catch (err) {
    res
      .status(501)
      .json({ 
        success: false, message: "Failed to create, Try again",
        message : err.message
    });
  }
};


// update User 
export const updateUser = async(req, res) => {
    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set:req.body
        }, {new:true})

        res.status(200)
        .json({ 
            message: "Successfully update",
            data : updateUser
        });

    } catch (err) {
        res
        .status(500)
        .json({ success: false, message: "Failed to update, Try again",
          message : err
      });
    }
}


// delete User 
export const deleteUser = async(req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)

        res.status(200)
        .json({ 
            message: "Successfully delete",
        });

    } catch (err) {
        res
        .status(500)
        .json({ success: false, message: "Failed to delete, Try again",
          message : err
      });
    }
}


// getSingle User 
export const getSingleUser = async(req, res) => {
    const id = req.params.id
    try {
       const User =  await User.findById(id)

        res.status(200)
        .json({ 
            message: "ready",
            data : User
        });

    } catch (err) {
        res
        .status(404)
        .json({ success: false, message: "Not Found",
          message : err
      });
    }
}



// getAll User 
export const getAllUser = async(req, res) => {


    try {
        const users =  await User.find({})
        .skip(page * 8)
        .limit(8);
        
         res.status(200)
         .json({     
             message: "ready",
             data : users      
         });
 
     } catch (err) {
         res
         .status(404)
         .json({ success: false, message: "Not Found",
           message : err
       });
     }
}
