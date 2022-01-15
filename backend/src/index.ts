// import { PrismaClient } from "@prisma/client";
import routes from "./routes/index";
import express, { Request, Response } from "express";
require("dotenv").config();
import cors from "cors";
import logger from "morgan";
import Stripe from "stripe";
const stripe = new Stripe(`${process.env.REACT_APP_STRIPE_SECRET_KEY}`, {
  apiVersion: "2020-08-27",
});
const port = process.env.PORT || 3001;

// const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/api", routes);


app.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    const { quantity } = req.body;
    const session = await stripe.checkout.sessions.create({
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
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(port, () =>
  process.env.NODE_ENV === "production"
    ? console.log(`server is eavesdropping in production on port ${port}`)
    : console.log(
        `server is eavesdropping in development on: http://localhost:${port}`
      )
);
