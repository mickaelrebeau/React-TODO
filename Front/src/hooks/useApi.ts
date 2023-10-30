import axios, { AxiosInstance } from "axios";

export function useApi() {  

    const api : AxiosInstance = axios.create({
        baseURL : import.meta.env.VITE_API_BASE_URL,
    });

    return api;
}