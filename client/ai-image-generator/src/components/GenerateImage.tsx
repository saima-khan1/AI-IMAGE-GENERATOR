import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { Button, Container, TextField, Typography } from "@mui/material";
import { GeneratingAIImage } from "../services/fetchApi";

import GeneratedImageCard from "./GeneratedImageCard";

interface Post {
  name: string;
  prompt: string;
  photo: string;
}

interface GenerateImageProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  createPostLoading: boolean;
  setCreatePostLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generateImageLoading: boolean;
  setGenerateImageLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const GenerateImage: React.FC<GenerateImageProps> = ({
  post,
  setPost,
  createPostLoading,
  setCreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
}) => {
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GeneratingAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `${res?.data?.photo}`,
        }),
          setGenerateImageLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const CreatePostFun = () => {
    setCreatePostLoading(true);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f9f9f9",
        border: "1px solid #333",
        borderRadius: "12px",
        p: 3,
        mt: 4,

        height: "100vh",
      }}
    >
      <Typography variant="h3" fontFamily={"fantasy"} color="black">
        Generate Image With Prompt
      </Typography>
      <Typography variant="h6" fontFamily={"monospace"}>
        Write your Prompt according to the image you want to generate !
      </Typography>

      <form>
        <Typography variant="h6" fontFamily={"monospace"}>
          AUTHOR
        </Typography>
        <TextField
          placeholder="Enter your name"
          rows={1}
          fullWidth
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />

        <Typography variant="h6" fontFamily={"monospace"}>
          Image Prompt
        </Typography>
        <TextField
          placeholder="Write a detailed prompt about the image"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />

        <Typography
          variant="body2"
          sx={{ mt: 2, mb: 1 }}
          fontFamily={"monospace"}
        >
          **You can post AI generated image to community**
        </Typography>

        <Button
          variant="contained"
          disabled={post.prompt === "" || generateImageLoading}
          onClick={generateImageFun}
          sx={{ mr: 2 }}
        >
          <AutoAwesome />
          {generateImageLoading ? "Generating..." : "Generate Image"}
        </Button>

        <Button
          variant="contained"
          disabled={
            post.name === "" ||
            post.prompt === "" ||
            post.photo === "" ||
            createPostLoading
          }
          onClick={CreatePostFun}
        >
          <CreateRounded />
          {createPostLoading ? "Posting..." : "Post Image"}
        </Button>
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </form>
    </Container>
  );
};

export default GenerateImage;
