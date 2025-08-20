import express from "express";
import { generateImage } from "../controllers/GeneratingAIImage";

const router = express.Router();

router.post("/", generateImage);

export default router;
