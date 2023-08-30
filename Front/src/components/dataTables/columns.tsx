/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Badge } from "@/components/ui/badge"

import { labels, priorities, statuses } from "../../data/data"
import { DataTableColumnHeader } from "./dataTableColumnHeader"
import { DataTableRowActions } from "./dataTableRowActions"

import { parseISO, isToday } from "date-fns"

export const columns: any = [
  {
    accessorKey: "id",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" className="translate-x-9" />
    ),
    // @ts-ignore
    cell: ({ row }) => <div className="w-[80px]">Task-{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    // @ts-ignore
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)
      const isDone = row.original.status === "done";

      const deadlineDate = row.original.deadline;
      const parsedDeadline = deadlineDate ? parseISO(deadlineDate) : null;
      const isTodayDeadline = parsedDeadline && isToday(parsedDeadline);
      const isOverdue = parsedDeadline && parsedDeadline < new Date();

      return (
        <div className="flex flex-col items-start space-x-2">
          <div>
            {label && <Badge variant="outline" className="mr-2">{label.label}</Badge>}
            <span className={`max-w-[200px] truncate font-medium ${isDone ? "line-through opacity-50" : ''}`}>
              {row.getValue("title")}
            </span>
          </div>
          <div>
            {parsedDeadline && (
                <span className={isTodayDeadline ? "font-bold text-orange-400" : isOverdue ? "font-bold text-red-500" : ""}>
                  {isTodayDeadline ? "Today !" : isOverdue && isDone ? "" : isOverdue ? "Overdue !" : parsedDeadline.toDateString()}
                </span>
              )}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "description",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    // @ts-ignore
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("description")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    // @ts-ignore
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    // @ts-ignore
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "priority",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    // @ts-ignore
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    // @ts-ignore
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    // @ts-ignore
    cell: ({ row }) => <DataTableRowActions row={row} taskId={row.original.id}/>,
  },
]