import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

interface Post {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
}

interface CardsProps {
  data: Post[];
}

const Cards = ({ data }: CardsProps) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {data.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post._id}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={post.photo}
              alt={post.prompt}
              sx={{
                height: 250, // make height same as card if you want full coverage
                width: "100%", // full width
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
