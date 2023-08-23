import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import { getAllTodos } from "@/src/services/api/todo";
import { useEffect, useState } from "react";

type Task = {
    id: number,
    label: string;
    title: string;
    deadline: string;
    description: string;
    status: string;
    priority: string;
};

export default function MobilePage() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTodos()
        .then((response) => {
            const data = response?.data
            setTasks(data)
        })
        .catch(err => console.log(err))
    })

    return (
        <div className="flex flex-col gap-4">
            {tasks.map((task) => (
                <Card className="w-full max-w-[500px] mx-auto">
                <CardHeader>
                    <div className="flex justify-between">
                        <h2 className="font-bold">Id</h2>
                        <p>{task.id}</p>
                    </div>
                    <CardTitle>
                        <div className="flex justify-between">
                            <h2>Title</h2>
                            <div className="flex">
                                <Badge variant="outline" className="mr-2">{task.label}</Badge>
                                <p>{task.title}</p>
                            </div>
                        </div>
                    </CardTitle>
                    <CardDescription>
                        <div className="flex justify-between">
                            {task.deadline && (
                                <h2 className="font-bold">Deadline</h2>
                                )
                            }
                            {task.deadline && (
                                task.deadline
                                )
                            }
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between">
                        <h2 className="font-bold">Description</h2>
                        <p>{task.description}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="font-bold">Status</h2>
                        <p>{task.status}</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <h2 className="font-bold">Priority</h2>
                        <p>{task.priority}</p>
                    </div>
                </CardFooter>
            </Card>
            ))}
        </div>
    )
}