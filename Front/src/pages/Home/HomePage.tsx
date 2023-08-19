/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import DataTable from "@/src/components/data-table";
import { columns } from "../../components/columns"
import { getAllTodos } from "@/src/services/api/todo";
import { useEffect, useState } from "react";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTodos()
        .then((response) => {
            const data = response?.data
            setTasks(data)
        })
        .catch(err => console.log(err))
    }, []);
    
    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 mt-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div className="text-left">
                        <h2 className="text-2xl font-bold tracking-tight">Welcome!</h2>
                        <p className="text-muted-foreground">
                        Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                </div>
                <DataTable data={tasks} columns={columns} />
            </div>
        </>
    )
}
