import axios from "axios";

const apiBaseUrl = "https://localhost:5001/api";

interface PlatformResponse {
  id: string;
  name: string;
  description?: string;
}

export const getPlatforms = async () => {
  const result = await axios.get<PlatformResponse[]>(`${apiBaseUrl}/Platforms`);
  return result.data;
};

interface TipResponse {
  id: string;
  description: string;
  snippet: string;
  platformId: string;
}

export const getPlatformTips = async (platformId: string) => {
  const result = await axios.get<TipResponse[]>(
    `${apiBaseUrl}/Platforms/${platformId}/Tips`
  );
  return result.data;
};
