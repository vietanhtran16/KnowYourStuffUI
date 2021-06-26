import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Header } from "./Header";
import { Platform } from "./Platform";

const useStyles = makeStyles({
  container: {
    marginTop: "20px",
  },
});

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container} maxWidth="lg">
        <Platform />
      </Container>
    </>
  );
};
