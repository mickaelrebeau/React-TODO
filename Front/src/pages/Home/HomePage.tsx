/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import DataTable from "@/src/components/dataTables/dataTable";
import { columns } from "../../components/dataTables/columns"
import { getAllTodos } from "@/src/services/api/todo";
import { useEffect, useState } from "react";
import MobilePage from "../Mobile/MobilePage";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
    const [tasks, setTasks] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
            <div className="h-full flex-1 flex-col space-y-8 mt-8 p-3 lg:p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div className="text-left">
                        <h2 className="text-2xl font-bold tracking-tight text-accent">Welcome!</h2>
                        <p className="text-muted-foreground">
                        Here&apos;s a list of your tasks!
                        </p>
                    </div>
                </div>
                {windowWidth > 1000 ? (
                    <DataTable data={tasks} columns={columns} />
                ) : (
                    <MobilePage />
                )}
            </div>
        </>
    )
}
