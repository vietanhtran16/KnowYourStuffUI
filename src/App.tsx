import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./Header";
import { PlatformPage } from "./PlatformPage";

const queryClient = new QueryClient();

const useStyles = makeStyles({
  container: {
    marginTop: "20px",
  },
});

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Container className={classes.container} maxWidth="lg">
        <PlatformPage />
      </Container>
    </QueryClientProvider>
  );
};