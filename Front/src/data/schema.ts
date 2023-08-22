import { z } from "zod"

export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  deadline: z.date(), 
  status: z.string(),
  label: z.string(),
  priority: z.string()
})

export type Task = z.infer<typeof taskSchema>