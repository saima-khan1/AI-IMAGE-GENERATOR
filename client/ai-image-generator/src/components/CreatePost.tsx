import { useState } from "react";
import GeneratedImageCard from "./GeneratedImageCard";
import GenerateImage from "./GenerateImage";
import NavBar from "./NavBar";

const CreatePost = () => {
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  return (
    <div>
      {" "}
      <NavBar />
      <GenerateImage
        post={post}
        setPost={setPost}
        createPostLoading={createPostLoading}
        setCreatePostLoading={setCreatePostLoading}
        generateImageLoading={generateImageLoading}
        setGenerateImageLoading={setGenerateImageLoading}
      />
      <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
    </div>
  );
};

export default CreatePost;
