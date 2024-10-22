import { desc, eq } from "drizzle-orm";
import db from "./drizzle";
import { task } from "./schema";
import { Task } from "@/lib/types";

export const getAllTasks = async () => {
  const tasks = await db.select().from(task).orderBy(desc(task.createdAt));
  return tasks;
};

export const addNewTask = async ({ title, description, status }: Task) => {
  const newTask = await db.insert(task).values({ title, description, status });
  return newTask;
};

export const updateTask = async (id: string, taskData: Task) => {
  const existingTask = (
    await db.select().from(task).where(eq(task.id, id)).limit(1)
  )[0];
  if (!existingTask) {
    throw new Error("Task not found");
  }

  existingTask.status = taskData.status;
  const updatedTask = await db
    .update(task)
    .set(existingTask)
    .where(eq(task.id, id));
  return updatedTask;
};

export const deleteTask = async (id: string) => {
  const deletedTask = await db.delete(task).where(eq(task.id, id));
  return deletedTask;
};
