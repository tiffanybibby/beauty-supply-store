"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("If you're reading this you're home! - test");
}));
//USERS//
// Gets all users
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json({
        success: true,
        payload: users,
    });
}));
// 2. Gets single user by ID
app.get(`/user/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield prisma.user.findFirst({
        where: { id: Number(id) },
    });
    res.json({
        success: true,
        payload: user,
    });
}));
// 3. Creates new user
app.post(`/user`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.create({
        data: Object.assign({}, req.body),
    });
    res.json({
        success: true,
        payload: result,
    });
}));
// 4. Updates single user
app.put("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield prisma.user.update({
        where: { id: Number(id) },
        data: Object.assign({}, req.body),
    });
    res.json({
        success: true,
        payload: user,
    });
}));
// 5. Deletes single user by ID
app.delete(`/user/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield prisma.user.delete({
        where: { id: Number(id) },
    });
    res.json({
        success: true,
        payload: user,
    });
}));
//PRODUCTS//
// 1. Gets all products
app.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany();
    res.json({
        success: true,
        payload: products,
    });
}));
// 2. Gets single product by ID
app.get(`/product/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield prisma.product.findFirst({
        where: { id: Number(id) },
    });
    res.json({
        success: true,
        payload: product,
    });
}));
// 3. Creates new product
app.post(`/product`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.product.create({
        data: Object.assign({}, req.body),
    });
    res.json({
        success: true,
        payload: result,
    });
}));
// 4. Updates single product
app.put("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield prisma.product.update({
        where: { id: Number(id) },
        data: Object.assign({}, req.body),
    });
    res.json({
        success: true,
        payload: product,
    });
}));
// 5. Deletes single product by ID
app.delete(`/product/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield prisma.product.delete({
        where: { id: Number(id) },
    });
    res.json({
        success: true,
        payload: product,
    });
}));
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
//# sourceMappingURL=index.js.map