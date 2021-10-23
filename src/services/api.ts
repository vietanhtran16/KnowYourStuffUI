import { get, post } from "./http-client";

const apiBaseUrl = "https://localhost:5001/api";

export interface Platform {
    id: string;
    name: string;
    description?: string;
}

export const getPlatforms = () => get<Platform[]>(`${apiBaseUrl}/Platforms`);

interface Tip {
    id: string;
    description: string;
    snippet: string;
    platformId: string;
}

export const getPlatformTips = (platformId: string) => get<Tip[]>(`${apiBaseUrl}/Platforms/${platformId}/Tips`);

export interface NewPlatform {
    name: string;
    description?: string;
}

export const createPlatform = (newPlatform: NewPlatform) => post<Platform>(`${apiBaseUrl}/Platforms`, newPlatform);
