"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { PrismaClient } from "@prisma/client";
const index_1 = __importDefault(require("./routes/index"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// const prisma = new PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use('/api', index_1.default);
const port = process.env.PORT || 3001;
app.listen(port, () => process.env.NODE_ENV === 'production' ? console.log(`server is eavesdropping in production on port ${port}`) : console.log(`server is eavesdropping in development on: http://localhost:${port}`));
//# sourceMappingURL=index.js.map