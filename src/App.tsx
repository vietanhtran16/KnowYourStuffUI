import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./components/Header";
import { PlatformPage } from "./pages/PlatformPage";
import { FavouritePlatformsCountContextProvider } from "./state/favourite-platforms-count";

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
      <FavouritePlatformsCountContextProvider>
        <Header />
        <Container className={classes.container} maxWidth="lg">
          <PlatformPage />
        </Container>
      </FavouritePlatformsCountContextProvider>
    </QueryClientProvider>
  );
};
