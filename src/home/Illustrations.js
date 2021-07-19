import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import undraw_posting_photo from "./undraw_posting_photo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Illustrations() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Illustration" />
      <CardMedia
        className={classes.media}
        image={undraw_posting_photo}
        title="image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Add some quality, svg illustrations to your project courtesy of
          unDraw, a constantly updated collection of beautiful svg images that
          you can use completely free and without attribution!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
          Browse Illustrations on unDraw →
        </Button>
      </CardActions>
    </Card>
  );
}
