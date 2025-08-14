import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLocation, useNavigate } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chatbot");
  };
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div>
      <Typography variant="h4">GenAI</Typography>
      {path[1] === "chatbot" ? (
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
        >
          <ExploreIcon />
          Explore Post
        </Button>
      ) : (
        <Button onClick={handleClick} variant="contained">
          <AddIcon />
          Create new post
        </Button>
      )}
    </div>
  );
};

export default NavBar;
