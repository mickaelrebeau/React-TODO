import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

  export function CreateTodo() {
    return (
        <div className="flex items-center justify-center mt-12">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Create a new task</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="text-left">
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Title</Label>
                                <Input id="name" placeholder="Name of your project" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" placeholder="Add a description to your task here." />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Status</Label>
                                <Select>
                                    <SelectTrigger id="status">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Todo</SelectItem>
                                        <SelectItem value="sveltekit">In progress</SelectItem>
                                        <SelectItem value="astro">Done</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="labels">Label</Label>
                                <Select>
                                    <SelectTrigger id="labels">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Bug</SelectItem>
                                        <SelectItem value="sveltekit">Feature</SelectItem>
                                        <SelectItem value="astro">Documentation</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="priorities">Priority</Label>
                                <Select>
                                    <SelectTrigger id="priorities">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Low</SelectItem>
                                        <SelectItem value="sveltekit">Medium</SelectItem>
                                        <SelectItem value="astro">High</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="gap-8">
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                </CardFooter>
            </Card>
        </div>
    )
}