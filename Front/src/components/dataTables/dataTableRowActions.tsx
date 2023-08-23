/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"
import { deleteTodo } from "@/src/services/api/todo"

import { 
  Pencil1Icon,
  TrashIcon
 } from "@radix-ui/react-icons"

/**
 * Renders the row actions component for the data table.
 *
 * @param {object} props - The properties for the component.
 * @param {string} props.taskId - The ID of the task.
 * @return {JSX.Element} The rendered row actions component.
 */
export function DataTableRowActions({ taskId }: { taskId: string }) {
  const navigate = useNavigate()

  /**
   * Deletes a todo item and reloads the page.
   *
   * @param {string} taskId - The ID of the task to delete.
   * @return {Promise<void>} A promise that resolves when the task is deleted and the page is reloaded.
   */
  const handleDelete = async () => {
    await deleteTodo(taskId)
    
    // @ts-ignore
    window.location.reload(false);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[100px]">
        <DropdownMenuItem className="flex justify-between">
          <Button variant="ghost" className="h-6 w-6 p-0 data-[state=open]:bg-muted" 
          onClick={() => navigate(`/todos/${taskId}`)}>Edit</Button>
          <Pencil1Icon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between">
          <Button variant="ghost" className="h-6 w-6 px-5 data-[state=open]:bg-muted" onClick={handleDelete}>Delete</Button>
          <TrashIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}