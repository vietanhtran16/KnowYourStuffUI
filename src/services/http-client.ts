import axios from "axios";

export const get = async <TResponse>(url: string) => (await axios.get<TResponse>(url)).data;

export const post = async <TResponse>(url: string, data: any) => (await axios.post<TResponse>(url, data)).data;
