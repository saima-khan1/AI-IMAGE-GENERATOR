import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";

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
  const generateImageFun = () => {
    setGenerateImageLoading(true);
  };
  const CreatePostFun = () => {
    setCreatePostLoading(true);
  };
  return (
    <div>
      <Typography variant="h3">Generate Image With Prompt</Typography>
      <Typography variant="h6">
        Write your Prompt according to the image you want to generate !
      </Typography>

      <form>
        <Typography variant="h6">AUTHOR</Typography>
        <TextField
          placeholder="Enter your name"
          rows={1}
          fullWidth
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />

        <Typography variant="h6">Image Prompt</Typography>
        <TextField
          placeholder="Write a detailed prompt about the image"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />

        <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
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
      </form>
    </div>
  );
};

export default GenerateImage;
