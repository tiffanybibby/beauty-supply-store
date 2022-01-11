import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from 'cors'
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", async (_req, res) => {
  res.send("If you're reading this you're home! - test");
});

//USERS//
// Gets all users
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({
    success: true,
    payload: users,
  });
});

// 2. Gets single user by ID
app.get(`/user/:id`, async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: user,
  });
});

// 3. Creates new user
app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: result,
  });
});

// 4. Updates single user
app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: user,
  });
});

// 5. Deletes single user by ID
app.delete(`/user/:id`, async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: user,
  });
});

//PRODUCTS//
// 1. Gets all products
app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json({
    success: true,
    payload: products,
  });
});

// 2. Gets single product by ID
app.get(`/product/:id`, async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: product,
  });
});

// 3. Creates new product
app.post(`/product`, async (req, res) => {
  const result = await prisma.product.create({
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: result,
  });
});

// 4. Updates single product
app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json({
    success: true,
    payload: product,
  });
});

// 5. Deletes single product by ID
app.delete(`/product/:id`, async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: { id: Number(id) },
  });
  res.json({
    success: true,
    payload: product,
  });
});

app.use((req, res, next) => {
  res.status(404);
  return res.json({
    success: false,
    payload: null,
    message: `Unsucessful query for path: ${req.path}`,
  });
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is eavesdropping on port ${port}`));