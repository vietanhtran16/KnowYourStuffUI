import axios from "axios";

const apiBaseUrl = "https://localhost:5001/api";

export interface Platform {
    id: string;
    name: string;
    description?: string;
}

export const getPlatforms = async () => {
    const result = await axios.get<Platform[]>(`${apiBaseUrl}/Platforms`);
    return result.data;
};

interface Tip {
    id: string;
    description: string;
    snippet: string;
    platformId: string;
}

export const getPlatformTips = async (platformId: string) => {
    const result = await axios.get<Tip[]>(`${apiBaseUrl}/Platforms/${platformId}/Tips`);
    return result.data;
};
