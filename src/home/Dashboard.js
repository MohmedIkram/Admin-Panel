import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Charts from "./Charts";
import DoughnutCharts from "./DonutChart";
import Cards from "./Cards";
import Illustrations from "./Illustrations";
import Projects from "./Projects";

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 28,
    align: "left",
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} color="textSecondary">
        Dashboard
      </Typography>
      {/* 4cards on top of the page */}
      <Cards />

      {/* line chart and donut chart */}
      <Grid container spacing={3}>
        {/* line chart */}
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Charts />
          </Paper>
        </Grid>

        {/*  donut chart */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <DoughnutCharts />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* projects  */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Projects />
          </Paper>
        </Grid>
        {/* Illustration */}
        <Grid item xs={12} sm={6}>
          <Illustrations />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
