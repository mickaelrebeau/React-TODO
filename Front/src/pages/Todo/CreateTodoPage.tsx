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
import { createTodo } from "@/src/services/api/todo"
import { useNavigate } from "react-router-dom"

  export function CreateTodo() {
    const navigate = useNavigate();

    const FormSchema = z.object({
        title: z.string()
        .min(3, "Title is too short")
        .max(20, "Title is too long"),
        description: z.string()
        .min(3, "Description is too short"),
        status: z.string(),
        label: z.string(),
        priority: z.string(),
    })
    
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    

    async function onSubmit(values: any) {
        const { title, description, status, priority, label } = values
        const todo = { title, description, status, priority, label }

        const response = await createTodo(todo)

        if (response) {
            console.log(response)
            navigate('/')
        }
    }

    return (
        <>
        <div className="flex items-center justify-center mt-8">
            <Card className="w-[400px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="text-left">
                        <CardHeader>
                            <CardTitle>Create a new task</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <Input id="name" placeholder="Title of your task" type="text"
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
                                        <Textarea id="description" placeholder="Add a description to your task here." 
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        <CardFooter>
                            <Button className="w-full" variant="secondary" type="submit">Confirm</Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
        </>
    )
}