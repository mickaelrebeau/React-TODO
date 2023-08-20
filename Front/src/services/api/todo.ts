/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function getTodo(id: any) {
    try {
        const todo = await api.get(`/todos/${id}`);
        return todo;
    } catch (error) {
        console.log(error);
    }
}

export async function createTodo(body: any) {
    try {
        const newTodo = await api.post("/todos", body);
        return newTodo;
    } catch (error) {
        console.log(error);
    }
}

export async function updateTodo(id: any, body: any) {
    try {
        const updatedTodo = await api.put(`/todos/${id}`, body);
        return updatedTodo;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTodo(id: any) {
    try {
        const deletedTodo = await api.delete(`/todos/${id}`);
        return deletedTodo;
    } catch (error) {
        console.log(error);
    }
}