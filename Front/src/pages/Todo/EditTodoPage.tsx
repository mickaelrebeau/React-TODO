/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { getTodo, updateTodo } from "@/src/services/api/todo"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

  export function UpdateTodo() {
    const { taskId } = useParams();
    const navigate = useNavigate();
    
    const [todos, setTodos] = useState({
        title: "",
        description: "",
        status: "",
        label: "",
        priority: "",
    });

    useEffect(() => {
        getTodo(taskId)
        .then((response) => {
            setTodos({
                title: response?.data.title,
                description: response?.data.description,
                status: response?.data.status,
                label: response?.data.label,
                priority: response?.data.priority
            })
            form.reset(response?.data);
            console.log('heeee', form)
        })
        .catch((err) => console.log(err));
    }, [taskId]);

    const FormSchema = z.object({
        title: z.string()
        .min(3, "Title is too short")
        .max(20, "Title is too long")
        .optional(),
        description: z.string()
        .min(3, "Description is too short")
        .optional(),
        status: z.string()
        .optional(),
        label: z.string()
        .optional(),
        priority: z.string()
        .optional(),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: todos
    })
    console.log(todos);
    
    
  
    console.log(form)
    

    async function onSubmit(values: any) {
        try {
            const updatedTodo = {
                title: values.title !== '' ? values.title : todos.title,
                description: values.description !== '' ? values.description : todos.description,
                status: values.status !== '' ? values.status : todos.status,
                label: values.label !== '' ? values.label : todos.label,
                priority: values.priority !== '' ? values.priority : todos.priority
            };
            console.log(updatedTodo);

            await updateTodo(taskId, updatedTodo)

            setTodos({
                title: updatedTodo.title,
                description: updatedTodo.description,
                status: updatedTodo.status,
                label: updatedTodo.label,
                priority: updatedTodo.priority,
            })

            navigate('/')
        } catch (error) {
            console.log(error);
        }  
    }

    return (
        <>
        <div className="flex items-center justify-center mt-8">
            <Card className="w-[400px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="text-left">
                        <CardHeader>
                            <CardTitle>Update a task</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <Input id="name" placeholder={todos.title} type="text"
                                        onChange={field.onChange} name="title" value={field.value}/>
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <Textarea id="description" placeholder={todos.description} 
                                        onChange={field.onChange} name="description" value={field.value}/>
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent position="popper">
                                                <SelectItem value="todo">Todo</SelectItem>
                                                <SelectItem value="in progress">In progress</SelectItem>
                                                <SelectItem value="done">Done</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                control={form.control}
                                name="label"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Label</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent position="popper">
                                                <SelectItem value="bug">Bug</SelectItem>
                                                <SelectItem value="feature">Feature</SelectItem>
                                                <SelectItem value="documentation">Documentation</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                control={form.control}
                                name="priority"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Priority</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent position="popper">
                                                <SelectItem value="low">Low</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="high">High</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-8">
                            <Button variant="outline" onClick={() => navigate(`/`)}>Annuler</Button>
                            <Button variant="secondary" type="submit">Confirm</Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
        </>
    )
}