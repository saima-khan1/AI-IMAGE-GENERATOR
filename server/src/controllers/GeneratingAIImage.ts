import * as dotenv from "dotenv";
import OpenAI from "openai";
import { Request, Response, NextFunction } from "express";
import { createError } from "../error";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { prompt } = req.body;

    // const response = await openai.images.generate({
    //   model: "gpt-image-1",
    //   prompt,
    //   n: 1,
    //   size: "1024x1024",
    //   //   response_format: "b64_json",
    // });

    // const generatedImage = response.data?.[0]?.url;

    // if (!generatedImage) {
    //   throw new Error("Image generation failed, no data returned.");
    // }
    // await new Promise((r) => setTimeout(r, 1000));
    const generatedImage =
      "https://via.placeholder.com/1024x1024.png?text=Mock+AI+Image";

    return res.status(200).json({ photo: generatedImage });
  } catch (err: any) {
    next(
      createError(
        err.status || 500,
        err?.response?.data?.error?.message || err.message
      )
    );
  }
};
