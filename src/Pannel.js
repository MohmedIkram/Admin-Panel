import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import BuildIcon from "@material-ui/icons/Build";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import FolderIcon from "@material-ui/icons/Folder";
import TableChartIcon from "@material-ui/icons/TableChart";
import SpeedIcon from "@material-ui/icons/Speed";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Divider from "@material-ui/core/Divider";
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Card>
        {/* <CardContent>
          <Typography color="textSecondary">
            {" "}
            <SupervisorAccountIcon />
            ADMIN
          </Typography>
        </CardContent> */}

        <CardActions>
          <SpeedIcon /> <Button size="small">Dashboard </Button>
        </CardActions>
      </Card>
      <Divider />

      {/* Components   */}

      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <SettingsIcon />
          <Typography>Components</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <CardContent>
              <Typography color="textSecondary">CUSTOM COMPONENTS:</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buttons </Button>
            </CardActions>
            <CardActions>
              <Button size="small">Cards </Button>
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>

      {/* UTILITIES   */}

      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <BuildIcon />
          <Typography>UTILITIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <CardContent>
              <Typography color="textSecondary">CUSTOM UTILITIES:</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Colors </Button>
            </CardActions>
            <CardActions>
              <Button size="small">Borders </Button>
            </CardActions>
            <CardActions>
              <Button size="small">Animations </Button>
            </CardActions>
            <CardActions>
              <Button size="small">Other </Button>
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Divider />

      {/* Pages   */}

      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <FolderIcon /> <Typography>Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <CardContent>
              <Typography color="textSecondary">LOGIN SCREENS:</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Login </Button>
            </CardActions>
            <CardActions>
              <Button size="small">Register </Button>
            </CardActions>
            <CardActions>
              <Button size="small">Forgot Password </Button>
            </CardActions>
            <CardContent>
              <Typography color="textSecondary">OTHER PAGES: </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">404 Page </Button>
            </CardActions>
            <CardActions>
              <Button size="small">Blank Page </Button>
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>
      <Card>
        <CardActions>
          <InsertChartIcon /> <Button size="small">Charts</Button>
        </CardActions>
        <CardActions>
          <TableChartIcon /> <Button size="small"> Tables </Button>
        </CardActions>
      </Card>
    </div>
  );
}
