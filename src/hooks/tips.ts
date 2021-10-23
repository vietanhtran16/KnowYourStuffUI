import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTip, getPlatformTips, NewTip, Tip } from "./../services/api";

const getTipQueryKey = (platformId: string): string[] => {
    return ["platform-tips", platformId];
};

export const useTips = (platformId: string) => {
    return useQuery(getTipQueryKey(platformId), () => getPlatformTips(platformId));
};

export const useCreateTip = () => {
    const queryClient = useQueryClient();
    return useMutation<Tip, unknown, { tip: NewTip; platformId: string }>(
        ({ tip, platformId }) => createTip(tip, platformId),
        {
            onMutate: async ({ tip, platformId }) => {
                const cacheKey = getTipQueryKey(platformId);
                await queryClient.cancelQueries(cacheKey);
                const optimisticNewTip: Tip = { id: "sdfdfdfdf", ...tip, platformId };
                queryClient.setQueryData<Tip[]>(cacheKey, (current) =>
                    current ? [...current, optimisticNewTip] : [optimisticNewTip],
                );
            },
            onSuccess: ({ platformId }) => {
                queryClient.invalidateQueries(getTipQueryKey(platformId));
            },
        },
    );
};
