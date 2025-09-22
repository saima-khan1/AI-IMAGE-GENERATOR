import { Box, Button, Container, InputBase, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { GetPosts } from "../services/fetchApi";
import Cards from "./Cards";
// import Cards from "./Cards";

interface PostType {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
}
const Landing = () => {
  const [search, setSearch] = useState();
  const [searchImage, setSearchImage] = useState();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await GetPosts();

        setPosts(res.data.data || []);
        console.log(res.data, "data");
      } catch (error) {
        console.log(error, "err");
      }
    };
    getData();
  }, []);
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

      <Cards data={posts} />
      {/* <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post._id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={post.photo}
              alt={post.prompt}
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "16px",
              }}
            />
            <div>
              <strong>{post.name}</strong>
              <p style={{ margin: 0 }}>{post.prompt}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </Container>
  );
};

export default Landing;
