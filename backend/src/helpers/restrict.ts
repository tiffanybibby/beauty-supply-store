import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.TOKEN_KEY || 'areallylonggoodkey'

const restrict = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    if (jwt.verify(token, TOKEN_KEY )) {
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(403).send('Unauthorized')
  }
}

export default restrict