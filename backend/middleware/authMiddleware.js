import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      console.log("Received token:", token); // Log the received token

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      console.log("Decoded token:", decoded); // Log the decoded token

      req.user = await User.findById(decoded.id).select('-password')

      console.log("User attached to request:", req.user); // Log the user attached to the request

      next()
    } catch (error) {
      console.error("Token verification error:", error); // Log the token verification error
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})


const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

export { protect, admin }
