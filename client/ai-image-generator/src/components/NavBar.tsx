import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chatbot");
  };

  return (
    <div>
      <Typography variant="h4">GenAI</Typography>
      <Button onClick={handleClick} variant="contained">
        <AddIcon />
        Create new post
      </Button>
    </div>
  );
};

export default NavBar;
