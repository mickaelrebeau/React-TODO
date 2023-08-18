import { ModeToggle } from "./mode-toggle";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export function Navbar() {
    return (
        <>
            <nav className="w-full flex justify-between items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>React Todo App</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Github Repository</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Github</DropdownMenuItem>
                        <DropdownMenuItem>Linkedin</DropdownMenuItem>
                        <DropdownMenuItem>Instagram</DropdownMenuItem>
                        <DropdownMenuItem>Twitch</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex gap-8 items-center">
                    <p>Todos</p>
                    <p>New Todo</p>
                </div>
                <ModeToggle />
            </nav>
        </>
    )
}