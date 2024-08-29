import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { app, server } from "./socket/socket.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

// import routes
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/messages", messageRoute);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.use(errorHandler);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// server
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    server.listen(process.env.PORT, () =>
      console.log(`Server runing on Port: ${process.env.PORT}`)
    );
  })
  .catch((error) => console.log(error));
