// //PRODUCTS//
// // 1. Gets all products
// app.get("/products", async (req, res) => {
//   const products = await prisma.product.findMany();
//   res.json({
//     success: true,
//     payload: products,
//   });
// });

// // 2. Gets single product by ID
// app.get(`/product/:id`, async (req, res) => {
//   const { id } = req.params;
//   const product = await prisma.product.findFirst({
//     where: { id: Number(id) },
//   });
//   res.json({
//     success: true,
//     payload: product,
//   });
// });

// // 3. Creates new product
// app.post(`/product`, async (req, res) => {
//   const result = await prisma.product.create({
//     data: { ...req.body },
//   });
//   res.json({
//     success: true,
//     payload: result,
//   });
// });

// // 4. Updates single product
// app.put("/product/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = await prisma.product.update({
//     where: { id: Number(id) },
//     data: { ...req.body },
//   });
//   res.json({
//     success: true,
//     payload: product,
//   });
// });

// // 5. Deletes single product by ID
// app.delete(`/product/:id`, async (req, res) => {
//   const { id } = req.params;
//   const product = await prisma.product.delete({
//     where: { id: Number(id) },
//   });
//   res.json({
//     success: true,
//     payload: product,
//   });
// });