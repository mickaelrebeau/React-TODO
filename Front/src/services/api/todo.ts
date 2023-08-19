/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/src/hooks/useApi";

const api = useApi();

export async function getAllTodos() {
    try {
        const todos = await api.get("/todos");
        return todos;
    } catch (error) {
        console.log(error);
    }
}