import { config } from "dotenv";
import morgan from "morgan"
import express from "express";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

config();
const app = express();

//middleware
app.use(cors({ origin: "hhtp://localhost:5173", credentials: true }))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(helmet())

app.use(morgan("dev"))

app.use("/api/v1", appRouter)

export default app;