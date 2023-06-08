
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useState } from "react";
import { REACT_BASE_IMG_URL } from "../../../constants";
import { useNavigate } from 'react-router-dom';

export function CardDetails({ data }) {
  return (
    <Card sx={{ width: { lg: "50%", xs: '80%' }, borderRadius: "14px", backgroundColor: 'black' }}>
      <CardMedia
        sx={{ height: { xs: '75vh', lg: '60vh' }, mt: { xs: 10 } }}
        image={REACT_BASE_IMG_URL + data}
        title="green iguana"
      />
    </Card >
  );
}

export function CardMovies({ data }) {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={2} sx={{ mb: 2 }}>
      <Card sx={{ width: "100%", height: "100%", borderRadius: "14px" }}>
        <CardActionArea onClick={() => navigate('/detail/' + data.id)}>
          <CardMedia
            sx={{ height: "40vh" }}
            image={REACT_BASE_IMG_URL + data.poster_path}
            title="green iguana"
          />
        </CardActionArea>
      </Card>
    </Grid >
  );
}

export function CardText({ data }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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
        <CardActionArea onClick={() => navigate('/detail/' + data.id)}>
          <CardMedia
            sx={{
              height: "20vh",
              transition: 'opacity 1s',
              borderRadius: '14px'
            }}
            image={REACT_BASE_IMG_URL + data?.backdrop_path}
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
              {data?.original_title}
            </Typography>
            <Typography variant="body2" color="white">
              {data?.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
