import {
  CircularProgress,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import { getPlatformTips } from "../services/api";

interface TipsProps {
  platformId: string;
}

export const Tips: React.FC<TipsProps> = ({ platformId }) => {
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
        <>
          <Typography>{description}</Typography>
          <Typography>{snippet}</Typography>
          <Divider />
        </>
      ))}
    </>
  );
};
