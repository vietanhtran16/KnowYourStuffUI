import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useQuery } from "react-query";
import { getPlatformTips } from "../services/api";
import { Tip } from "./Tip";

interface TipListProps {
  platformId: string;
}

export const TipList: React.FC<TipListProps> = ({ platformId }) => {
  const { isLoading, data: tips } = useQuery(
    ["platform-tips", platformId],
    () => getPlatformTips(platformId)
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {tips?.map((tip) => (
        <Tip {...tip} />
      ))}
    </>
  );
};
