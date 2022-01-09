"use strict";
// //USERS//
// // Gets all users
// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json({
//     success: true,
//     payload: users,
//   });
// });
// // 2. Gets single user by ID
// app.get(`/user/:id`, async (req, res) => {
//   const { id } = req.params;
//   const user = await prisma.user.findFirst({
//     where: { id: Number(id) },
//   });
//   res.json({
//     success: true,
//     payload: user,
//   });
// });
// // 3. Creates new user
// app.post(`/user`, async (req, res) => {
//   const result = await prisma.user.create({
//     data: { ...req.body },
//   });
//   res.json({
//     success: true,
//     payload: result,
//   });
// });
// // 4. Updates single user
// app.put("/user/:id", async (req, res) => {
//   const { id } = req.params;
//   const user = await prisma.user.update({
//     where: { id: Number(id) },
//     data: { ...req.body },
//   });
//   res.json({
//     success: true,
//     payload: user,
//   });
// });
// // 5. Deletes single user by ID
// app.delete(`/user/:id`, async (req, res) => {
//   const { id } = req.params;
//   const user = await prisma.user.delete({
//     where: { id: Number(id) },
//   });
//   res.json({
//     success: true,
//     payload: user,
//   });
// });
//# sourceMappingURL=users.js.map