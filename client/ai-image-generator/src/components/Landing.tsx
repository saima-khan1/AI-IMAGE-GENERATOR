import { Box, Button, Container, InputBase, Typography } from "@mui/material";

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
        color: "#fff",
        height: "100vh",
      }}
    >
      <Typography variant="h3" fontFamily={"fantasy"} color="black">
        Explore AI Generated Images{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          width: { md: 850, sm: 600, xs: 300 },
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        {" "}
        <InputBase
          sx={{
            flex: 1,
            padding: "9px",
            fontSize: "16px",
          }}
          placeholder="Search with prompt or name..."
          onChange={handleChange}
        />
        <Button
          sx={{ padding: "14px" }}
          onClick={handleSearch}
          variant="contained"
        >
          Search
        </Button>
      </Box>
      <Cards />
    </Container>
  );
};

export default Landing;
