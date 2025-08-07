import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const CreatePost = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="contained">Go Back</Button>
      </Link>
      <Typography variant="h1">khan</Typography>
    </div>
  );
};

export default CreatePost;
