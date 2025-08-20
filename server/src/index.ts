import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./routes/Post";
import generateImageRouter from "./routes/GenerateImage";

dotenv.config();

const app = express();
const PORT = 3001;
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/post", router);
app.use("/api/generateImage", generateImageRouter);

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Failed to connect MongoDB:", err);
  }
};

app.get("/", (_req, res) => {
  res.send("Hello, Node + TypeScript!");
});

app.listen(PORT, async () => {
  console.log(`🚀 Server running at ${PORT}`);
  await connectDB();
});
