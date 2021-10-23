import { useQuery } from "react-query";
import { getPlatformTips } from "./../services/api";

export const useTips = (platformId: string) => {
    return useQuery(["platform-tips", platformId], () => getPlatformTips(platformId));
};
