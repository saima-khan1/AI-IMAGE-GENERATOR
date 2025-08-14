import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";

const GenerateImage = () => {
  return (
    <div>
      <Typography variant="h3">Generate Image With Prompt</Typography>
      <Typography variant="h6">
        Write your Prompt according to the image you want to generate !
      </Typography>
      <form>
        <Typography variant="h6">AUTHOR</Typography>
        <TextField
          id="outlined-multiline-static"
          placeholder="Enter your name"
          multiline
          rows={1}
          variant="outlined"
          value={prompt}
          fullWidth
        />
        <Typography variant="h6">Image Prompt</Typography>
        <TextField
          id="outlined-multiline-static"
          placeholder="Write a detailed prompt about the image"
          multiline
          rows={8}
          variant="outlined"
          value={prompt}
          fullWidth
        />
        **You can post AI generated image to community**
        <Button variant="contained">
          {" "}
          <AutoAwesome />
          Generate Image
        </Button>
        <Button variant="contained">
          {" "}
          <CreateRounded />
          Post Image
        </Button>
      </form>
    </div>
  );
};

export default GenerateImage;
