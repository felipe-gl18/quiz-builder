import express from "express";
import { createQuizRoute } from "../../interface/routes/createQuiz.js";
import { deleteQuizRoute } from "../../interface/routes/deleteQuiz.js";
import { getAllQuizzesRoute } from "../../interface/routes/getAllQuizzes.js";
import { getQuizRoute } from "../../interface/routes/getQuiz.js";
import cors from "cors";

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("", createQuizRoute);
app.use("", deleteQuizRoute);
app.use("", getAllQuizzesRoute);
app.use("", getQuizRoute);

export default app;
