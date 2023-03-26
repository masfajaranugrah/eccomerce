import  jwt from "jsonwebtoken"

const  verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken

    if(!token) {
        return res.status(401).json({message : "you're not authorize"})
    }


    // if token is exits then verify the token 
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err){
            return res.status(401).json({message : "token is invalid"})
        }

        req.user = user
        // don't forget call next 
        next()
    })

}

export const verifyUser = (req, res, next) => {
    verifyToken(req,res, next, () => {
        if(req.user.id === req.params.id || req.user.role === 'admin'){
            next()
        }else {
          return  res.status(401).json({message : "You're not authenticated"})
        }
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req,res, next, () => {
        if(req.user.id === req.params.id || req.user.role === 'admin'){
            next()
        }else {
           return  res.status(401).json({message : "You're not authorize"})
        }
    })
}