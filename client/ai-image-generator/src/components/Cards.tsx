import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const cardData = [
  {
    title: "Card 1",
    description: "This is the first card.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Cards = () => {
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              height="160"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
