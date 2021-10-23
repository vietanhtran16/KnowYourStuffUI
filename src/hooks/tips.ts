import { useMutation, useQuery } from "react-query";
import { createTip, getPlatformTips, NewTip, Tip } from "./../services/api";

export const useTips = (platformId: string) => {
    return useQuery(["platform-tips", platformId], () => getPlatformTips(platformId));
};

export const useCreateTip = () =>
    useMutation<Tip, unknown, { tip: NewTip; platformId: string }>(({ tip, platformId }) => createTip(tip, platformId));
