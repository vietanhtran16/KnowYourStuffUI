import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    tip: {
        marginBottom: "8px",
    },
    snippet: {
        padding: "12px",
        backgroundColor: "#CCCCCC",
        borderRadius: "6px",
    },
});

interface TipProps {
    description: string;
    snippet: string;
}

export const Tip: React.FC<TipProps> = ({ description, snippet }: TipProps) => {
    const classes = useStyles();
    return (
        <div className={classes.tip}>
            <Typography>{description}</Typography>
            <Typography className={classes.snippet}>{snippet}</Typography>
        </div>
    );
};
