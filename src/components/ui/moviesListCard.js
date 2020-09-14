import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
});

export function MoviesListCard({ poster_path, title, original_name, id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://medieval.gumlet.net/wp-content/uploads/2015/06/Norfolk-Graffiti-Project-Survey-6-300x415.jpg?compress=true&quality=80&w=320&dpr=2.6`
          }
          title={title || original_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title || original_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
