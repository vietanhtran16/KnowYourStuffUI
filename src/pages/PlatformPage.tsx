import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Platform } from "../components/Platform";
import { NewPlatformForm } from "../components/NewPlatformForm";
import { usePlatforms } from "../hooks/platforms";

const useStyles = makeStyles({
    form: {
        margin: "10px auto",
    },
});

export const PlatformPage: React.FC = () => {
    const { isLoading, data: platforms } = usePlatforms();
    const { form } = useStyles();

    return (
        <>
            <Grid container className={form} justify="center">
                <NewPlatformForm />
            </Grid>
            {isLoading ? (
                <CircularProgress />
            ) : (
                platforms?.map((platform) => <Platform key={platform.id} {...platform} />)
            )}
        </>
    );
};
