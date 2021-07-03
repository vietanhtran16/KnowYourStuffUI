import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useFavouritePlatformsCountContext } from "../state/favourite-platforms-count";

const useStyles = makeStyles({
    appBar: {
        background: "#484848",
    },
    toolbarRoot: {
        justifyContent: "space-between",
    },
});

export const Header = () => {
    const classes = useStyles();
    const {
        state: { count },
    } = useFavouritePlatformsCountContext();
    return (
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar classes={{ root: classes.toolbarRoot }}>
                <Typography variant="h6">Know Your Stuff Wiki</Typography>
                <Typography variant="h6">{count} starred</Typography>
            </Toolbar>
        </AppBar>
    );
};
