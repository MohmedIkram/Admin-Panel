import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Projects() {
  const classes = useStyles();
  const Data = [
    { id: 1, title: "Primary", discription: "#4e73df" },
    { id: 2, title: "Success", discription: "#4e73df" },
    { id: 3, title: "Info", discription: "#4e73df" },
    { id: 4, title: "Warning", discription: "#4e73df" },
    { id: 5, title: "Danger", discription: "#4e73df" },
    { id: 6, title: "Secondary", discription: "#4e73df" },
    { id: 7, title: "Light", discription: "#4e73df" },
    { id: 8, title: "Dark", discription: "#4e73df" },
  ];
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="h2">
          Primary
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          4e73df
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
