import * as dotenv from "dotenv";
import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { createError } from "../error";

dotenv.config();

const HF_API_URL =
  "https://router.huggingface.co/fal-ai/fal-ai/lightning-models";

export const generateImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      HF_API_URL,
      {
        prompt,
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (
      !response.data ||
      !response.data.images ||
      !response.data.images[0]?.url
    ) {
      throw new Error("Failed to generate image");
    }

    const base64Image = response.data.images[0].url;

    return res.status(200).json({ photo: base64Image });
  } catch (err: any) {
    console.error("Hugging Face API Error:", err.response?.data || err.message);
    next(
      createError(err.status || 500, err.message || "Failed to generate image")
    );
  }
};
