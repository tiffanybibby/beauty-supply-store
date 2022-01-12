// import { PrismaClient } from "@prisma/client";
import routes from "./routes/index";
import express from "express";
import cors from "cors";
import logger from "morgan";

// const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/api", routes);

const port = process.env.PORT || 3001;
app.listen(port, () =>
  process.env.NODE_ENV === "production"
    ? console.log(`server is eavesdropping in production on port ${port}`)
    : console.log(
        `server is eavesdropping in development on: http://localhost:${port}`
      )
);
