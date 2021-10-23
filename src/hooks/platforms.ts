import { useQuery } from "react-query";
import { getPlatforms } from "../services/api";

export const usePlatforms = () => {
    return useQuery("platforms", getPlatforms);
};
