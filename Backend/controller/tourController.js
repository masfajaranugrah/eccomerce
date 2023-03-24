import Tour from "../models/Tour.js";

// create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  
  try {
    const sevedTour = await newTour.save();

    res.status(200)
    .json({ 
        message: "Successfully created",
        data : sevedTour
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create, Try again",
        message : err
    });
  }
};


// update tour 
export const updateTour = async(req, res) => {
    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set:req.body
        }, {new:true})

        res.status(200)
        .json({ 
            message: "Successfully update",
            data : updateTour
        });

    } catch (err) {
        res
        .status(500)
        .json({ success: false, message: "Failed to update, Try again",
          message : err
      });
    }
}


// delete tour 
export const deleteTour = async(req, res) => {
    const id = req.params.id
    try {
        await Tour.findByIdAndDelete(id)

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


// getSingle tour 
export const getSingleTour = async(req, res) => {
    const id = req.params.id
    try {
       const tour =  await Tour.findById(id).populate('reviews')

        res.status(200)
        .json({ 
            message: "ready",
            data : tour
        });

    } catch (err) {
        res
        .status(404)
        .json({ success: false, message: "Not Found",
          message : err
      });
    }
}



// getAll tour 
export const getAllTour = async(req, res) => {

    // for pagination 

    const page = parseInt(req.query.page)

    try {
        const tours =  await Tour.find({}).populate('reviews')
        .skip(page * 8)
        .limit(8);
        
         res.status(200)
         .json({
            
             message: "ready",
             count : tours.length,
             data : tours
             
         });
 
     } catch (err) {
         res
         .status(404)
         .json({ success: false, message: "Not Found",
           message : err
       });
     }
}


// get tour by search 
export const getTourBySearch = async(req, res) => {

    // here i means case sensitive 
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        // gte means greater than aqtual 
        const tours = await Tour.find({
            city,
            distance:{$gte : distance},
            maxGroupSize:{$gte : maxGroupSize}
        })
        res.status(200)
        .json({
           
            message: "ready",
            
            data : tours
            
        });

    } catch (err) {
        res.status(404)
        .json({
           
            message: "not fount",
            
        });

    }
}


// get featured tour 
export const getFeaturedTours = async(req, res) => {


    try {
        const tours =  await Tour.find({featured : true})
        .populate('reviews')
        .limit(8);
        
         res.status(200)
         .json({
            
             message: "ready",
             count : tours.length,
             data : tours
             
         });
 
     } catch (err) {
         res
         .status(404)
         .json({ success: false, message: "Not Found",
           message : err
       });
     }
}


// get tour count 

export const getTourCount = async(req, res) => {

    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200)
        .json({
            data : tourCount
        });

    } catch (err) {
        res.status(500)
        .json({
            message: "failed to fetch"
        });
    }
}