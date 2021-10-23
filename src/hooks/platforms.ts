import { createPlatform, NewPlatform } from "./../services/api";
import { useMutation, useQuery } from "react-query";
import { getPlatforms } from "../services/api";

export const usePlatforms = () => useQuery("platforms", getPlatforms);

export const useCreatePlatform = () => useMutation((newPlatform: NewPlatform) => createPlatform(newPlatform));
