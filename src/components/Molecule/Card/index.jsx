
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useState } from "react";

export function CardDetails() {
  return (
    <Card sx={{ width: { lg: "50%", xs: '80%' }, borderRadius: "14px", backgroundColor: 'black' }}>
      <CardMedia
        sx={{ height: { xs: '100vh', lg: '60vh' } }}
        image="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9626/889626-v"
        title="green iguana"
      />
    </Card>
  );
}

export function CardMovies() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
      <Card sx={{ width: "100%", height: "100%", borderRadius: "14px" }}>
        <CardMedia
          sx={{ height: "40vh" }}
          image="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9626/889626-v"
          title="green iguana"
        />
      </Card>
    </Grid>
  );
}

export function CardText() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: 1 }}>
      <Card sx={{ width: "100%", height: "100%", borderRadius: "10px", backgroundColor: 'black' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <CardMedia
          sx={{
            height: "20vh",
            transition: 'opacity 1s',
            borderRadius: '14px'
          }}
          image="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1419/1531419-h-e4edb087d448"
          title="green iguana"
        />
        <CardContent
          sx={{
            backgroundColor: "#16181F",
            transition: "opacity 1s",
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? "visible" : "hidden",
            height: isHovered ? 'auto' : '0px'
          }}>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Sailer X - Trailer
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
