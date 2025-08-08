import { Box, Button, InputBase, Typography } from "@mui/material";

import { useState } from "react";
import Cards from "./Cards";

const Landing = () => {
  const [search, setSearch] = useState();
  const [searchImage, setSearchImage] = useState();
  const handleSearch = () => {
    setSearch(search);
    console.log("clicked");
  };
  const handleChange = (e: any) => {
    setSearchImage(e.target.value);
  };
  return (
    <div>
      <Typography variant="h1">Explore AI Generated Images </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          width: { md: 850, sm: 600, xs: 300 },
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {" "}
        <InputBase
          sx={{ flex: 1, padding: "8px", fontSize: "16px" }}
          placeholder="Search with prompt or name..."
          onChange={handleChange}
        />
        <Button onClick={handleSearch} variant="contained">
          Search
        </Button>
      </Box>
      <Cards />
    </div>
  );
};

export default Landing;
