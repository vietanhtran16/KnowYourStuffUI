import { CircularProgress, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import { getPlatformTips } from "../services/api";

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

interface TipsProps {
  platformId: string;
}

export const Tips: React.FC<TipsProps> = ({ platformId }) => {
  const classes = useStyles();
  const { isLoading, data: tips } = useQuery(
    ["platform-tips", platformId],
    () => getPlatformTips(platformId)
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {tips?.map(({ description, snippet }) => (
        <div className={classes.tip}>
          <Typography>{description}</Typography>
          <Typography className={classes.snippet}>{snippet}</Typography>
        </div>
      ))}
    </>
  );
};
