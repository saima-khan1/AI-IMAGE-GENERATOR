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
    <Grid container spacing={6}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          {/* <Card
            sx={{
              height: 350,
             
              borderRadius: 3,
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
              bgcolor: "#1e1e1e",
              color: "#fff",
            }}
          > */}
          <Card
            sx={{
              minWidth: 400,
              marginTop: "100px",
              borderRadius: 3,
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: 220,
                objectFit: "cover",
              }}
              image={card.image}
              alt={card.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ color: "gray" }} noWrap>
                {card.title}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
