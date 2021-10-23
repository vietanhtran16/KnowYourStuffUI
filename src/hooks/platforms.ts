import { createPlatform, NewPlatform, Platform } from "./../services/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPlatforms } from "../services/api";

const platformsCacheKey = "platforms";

export const usePlatforms = () => useQuery(platformsCacheKey, getPlatforms);

export const useCreatePlatform = () => {
    const queryClient = useQueryClient();
    return useMutation((newPlatform: NewPlatform) => createPlatform(newPlatform), {
        onMutate: async (newPlatform: NewPlatform) => {
            await queryClient.cancelQueries(platformsCacheKey);
            const optimisticNewPlatform = { id: "sdfdfdfdf", ...newPlatform };
            queryClient.setQueryData<Platform[]>(platformsCacheKey, (current) =>
                current ? [...current, optimisticNewPlatform] : [optimisticNewPlatform],
            );
            return { optimisticNewPlatform };
        },
        onSuccess: () => {
            queryClient.invalidateQueries(platformsCacheKey);
        },
    });
};
