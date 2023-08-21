import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Navbar() {
    return (
        <>
            <nav className="w-full flex justify-between items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>React Todo App</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <a href="https://github.com/mickaelrebeau/React-TODO" rel="noopener">Github Repository</a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <a href="https://github.com/mickaelrebeau" rel="noopener">My Github</a>   
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.linkedin.com/in/mickael-r%C3%A9beau/" rel="noopener">My Linkedin</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.instagram.com/mike_photocollection/" rel="noopener">My Instagram</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="https://www.twitch.tv/mike_dreeman" rel="noopener">My Twitch</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex gap-8 items-center">
                    <p><NavLink to="/" >Tasks</NavLink></p>
                    <p><NavLink to="/new-todo" >Add a task</NavLink></p>
                </div>
                <ModeToggle />
            </nav>
        </>
    )
}