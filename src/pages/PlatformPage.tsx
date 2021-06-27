import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import { Platform } from "../components/Platform";
import { getPlatforms } from "../services/api";

export const PlatformPage: React.FC = () => {
  const { isLoading, data: platforms } = useQuery("platforms", getPlatforms);
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {platforms?.map((platform) => (
        <Platform key={platform.id} {...platform} />
      ))}
    </>
  );
};
