/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"
import { deleteTodo } from "@/src/services/api/todo"


export function DataTableRowActions({ taskId }: { taskId: string }) {
  const navigate = useNavigate()

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
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>
          <Button variant="ghost" className="h-6 w-6 p-0 data-[state=open]:bg-muted" 
          onClick={() => navigate(`/todos/${taskId}`)}>Edit</Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="ghost" className="h-6 w-6 p-0 data-[state=open]:bg-muted" onClick={handleDelete}>Delete</Button>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}