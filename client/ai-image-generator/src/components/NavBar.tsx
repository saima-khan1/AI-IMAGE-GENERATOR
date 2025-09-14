import { AppBar, Button, Toolbar, Typography } from "@mui/material";
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
    <AppBar position="static" sx={{ bgcolor: "#616161" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" fontFamily={"fantasy"}>
          GenAI
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
