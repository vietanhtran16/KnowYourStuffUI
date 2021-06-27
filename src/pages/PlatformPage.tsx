import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { Platform } from "../components/Platform";

const apiBaseUrl = "https://localhost:5001/api";

interface PlatformResponse {
  id: string;
  name: string;
  description?: string;
}
const getPlatforms = async () => {
  const result = await axios.get<PlatformResponse[]>(`${apiBaseUrl}/Platforms`);
  return result.data;
};

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
