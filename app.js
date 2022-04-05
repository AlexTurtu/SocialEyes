import express from "express";
import authRouter from "./api/auth.js";
import userRouter from "./api/users.js";
import postsRouter from "./api/posts.js";

import "dotenv/config";

import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => res.send("Test Social Eyes Server"));
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);

//connect to Mongo DB
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, () =>
  console.log("connected to Mongo")
);

//start server listening on port 5000 or auto selected port
app.listen(process.env.PORT || 5000);
