import { Box, Button, Container, InputBase, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { GetPosts } from "../services/fetchApi";
import Cards from "./Cards";

interface PostType {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
}
const Landing = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = () => {
    if (!search.trim()) {
      setFilteredPosts(posts);
    } else {
      const results = posts.filter(
        (post) =>
          post.name.toLowerCase().includes(search.toLowerCase()) ||
          post.prompt.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(results);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await GetPosts();
        const allPosts = res.data.data || [];
        setPosts(allPosts);
        setFilteredPosts(allPosts);
        console.log(res.data, "data");
      } catch (error) {
        console.log(error, "err");
      }
    };
    getData();
  }, []);

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
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          sx={{ padding: "14px" }}
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Cards data={filteredPosts} />
    </Container>
  );
};

export default Landing;
