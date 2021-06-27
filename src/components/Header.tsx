import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  appBar: {
    background: "#484848",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6">Know Your Stuff Wiki</Typography>
      </Toolbar>
    </AppBar>
  );
};
