import axios from "axios";

export const get = async <TResponse>(url: string) => (await axios.get<TResponse>(url)).data;
