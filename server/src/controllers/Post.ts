import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { createError } from "../error";
import Post from "../models/Post";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response, NextFunction } from "express";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (err: any) {
    next(
      createError(
        err.status || 500,
        err?.response?.data?.error?.message || err.message
      )
    );
  }
};
// export const createPost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     console.log("BODY:", req.body);
//     const { name, prompt, photo } = req.body;
//     const photoUrl = await cloudinary.uploader.upload(photo);

//     const newPost = await Post.create({
//       name,
//       prompt,
//       photo: photoUrl?.secure_url,
//     });
//     return res.status(201).json({ success: true, data: newPost });
//   } catch (err: any) {
//     next(
//       createError(
//         err.status || 500,
//         err?.response?.data?.error?.message || err.message
//       )
//     );
//   }
// };
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, prompt, photo } = req.body;

    let photoUrl;

    if (photo.startsWith("http")) {
      photoUrl = photo;
    } else {
      const uploaded = await cloudinary.uploader.upload(photo, {
        folder: "posts",
      });
      photoUrl = uploaded.secure_url;
    }

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (err: any) {
    next(
      createError(
        err.status || 500,
        err?.response?.data?.error?.message || err.message
      )
    );
  }
};
