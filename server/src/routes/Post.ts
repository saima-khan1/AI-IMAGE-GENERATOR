import express from "express";

import { createPost, getAllPosts } from "../controllers/Post";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
