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
// import { PrismaClient } from "@prisma/client";
const index_1 = __importDefault(require("./routes/index"));
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.REACT_APP_STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
});
// const prisma = new PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/api", index_1.default);
// app.use(express.static('public'));
app.post("/create-checkout-session", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity } = req.body;
        const session = yield stripe.checkout.sessions.create({
            line_items: [
                {
                    price: "price_1KHOO6K3BlH77gBmFqDu8FgB",
                    quantity,
                },
            ],
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `$http://localhost:${port}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:${port}/?canceled`,
        });
        res.status(200).json({ id: session.id });
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
}));
const port = process.env.PORT || 3001;
app.listen(port, () => process.env.NODE_ENV === "production"
    ? console.log(`server is eavesdropping in production on port ${port}`)
    : console.log(`server is eavesdropping in development on: http://localhost:${port}`));
//# sourceMappingURL=index.js.map