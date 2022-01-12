import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();



// 1. Gets all products
export const getProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json({
    success: true,
    payload: products,
  });
};

// 2. Gets single product by ID
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: product,
  });
};

// 3. Creates new product
export const createProduct = async (req: Request, res: Response) => {
  const result = await prisma.product.create({
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: result,
  });
};

// 4. Updates single product
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: product,
  });
};

// 5. Deletes single product by ID
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: product,
  });
};