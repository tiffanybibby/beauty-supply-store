import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();


const SALT_ROUNDS = process.env.SALT_ROUNDS
const TOKEN_KEY = process.env.TOKEN_KEY

// for JWT expiration
const today = new Date()
const exp = new Date(today)
exp.setDate(today.getDate() + 30)

// 1. Sign Up new user
export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const userExists = await prisma.user.findUnique({
      where: { email },
    });
    
    if (userExists) {
      res.status(401).send('Email already in use');
    } else {

      const password_digest = await bcrypt.hash(password, SALT_ROUNDS as string)
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password_digest,
        },
      });

      const payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password_digest: user.password_digest,
        // exp: parseInt(exp.getTime() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
      }

      const token = jwt.sign(payload, TOKEN_KEY as string)
      res.status(201).json({ token })
    }} catch (error:any) {
    console.log(error.message)
    res.status(400).json({ error: error.message })
  }
}

// 2. Sign in existing user
export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(401).send('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user!.password_digest)

    if (!isMatch) {
      res.status(401).send('Invalid Credentials');
    }
    
    
      const payload = {
        id: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        // exp: parseInt(exp.getTime() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
      }

      const token = jwt.sign(payload, TOKEN_KEY as string)
      res.status(201).json({ token })

  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

// 3. Verify user signed in
export const verify = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    const payload = jwt.verify(token, TOKEN_KEY as string)
    if (payload) {
      res.json(payload)
    }
  } catch (error: any) {
    console.log(error.message)
    res.status(401).send('Not Authorized')
  }
}

export const changePassword = async (req: Request, res: Response) => {}
