import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Gets all users
export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({
    success: true,
    payload: users,
  });
};

// 2. Gets single user by ID
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: user,
  });
};

// 3. Creates new user
export const createUser = async (req: Request, res: Response) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: result,
  });
};

// 4. Updates single user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: user,
  });
};

// 5. Deletes single user by ID
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: user,
  });
};