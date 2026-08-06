import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
// earlier we used app.get because using app earlier we were writing both routes and controllers here

// But now as we have separated routes and controllers so to bring routers we have to bring middleware as well. This is the general syntax

// app.use("/users", userRouter);
//http://localhost:8000/users/register

app.use("/api/v1/users", userRouter);
//http://localhost:8000/api/users/register

export { app };
