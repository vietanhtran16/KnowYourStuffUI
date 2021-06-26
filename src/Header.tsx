import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import React from "react";

export const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
      <Typography variant="h6">Know Your Stuff Wiki</Typography>
    </Toolbar>
  </AppBar>
);
