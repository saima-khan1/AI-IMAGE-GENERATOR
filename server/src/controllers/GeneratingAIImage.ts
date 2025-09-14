// import * as dotenv from "dotenv";
// import OpenAI from "openai";
// import { Request, Response, NextFunction } from "express";
// import { createError } from "../error";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const generateImage = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { prompt } = req.body;

//     // const response = await openai.images.generate({
//     //   model: "gpt-image-1",
//     //   prompt,
//     //   n: 1,
//     //   size: "1024x1024",
//     //   //   response_format: "b64_json",
//     // });

//     // const generatedImage = response.data?.[0]?.url;

//     // if (!generatedImage) {
//     //   throw new Error("Image generation failed, no data returned.");
//     // }
//     // await new Promise((r) => setTimeout(r, 1000));
//     const generatedImage =
//       "https://via.placeholder.com/1024x1024.png?text=Mock+AI+Image";

//     return res.status(200).json({ photo: generatedImage });
//   } catch (err: any) {
//     next(
//       createError(
//         err.status || 500,
//         err?.response?.data?.error?.message || err.message
//       )
//     );
//   }
// };
import * as dotenv from "dotenv";
import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { createError } from "../error";

dotenv.config();

// Public Stable Diffusion model (works with free API key)
const HF_API_URL =
  "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2";

// const HF_API_KEY = process.env.HF_API_KEY;

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
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // The model returns JSON with a base64-encoded image
    if (!response.data || !response.data[0]?.generated_image) {
      throw new Error("Failed to generate image");
    }

    const base64Image = response.data[0].generated_image;

    return res.status(200).json({
      photo: `data:image/png;base64,${base64Image}`,
    });
  } catch (err: any) {
    console.error("Hugging Face API Error:", err.response?.data || err.message);
    next(
      createError(err.status || 500, err.message || "Failed to generate image")
    );
  }
};
