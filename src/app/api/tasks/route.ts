import {
  addNewTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "@/db/repository";
import { Task } from "@/lib/types";
import { validateRequest } from "./utils";

export async function GET() {
  try {
    const tasks = await getAllTasks();
    return Response.json({ tasks });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const requestJson = (await request.json()) as Task;
  const validationResult = validateRequest(requestJson);
  if (validationResult) {
    return Response.json(validationResult, { status: 400 });
  }

  try {
    const result = await addNewTask(requestJson);
    return Response.json({ result });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const requestJson = (await request.json()) as Task;
  if (!requestJson.id) {
    return Response.json({ error: "Task ID is required" }, { status: 400 });
  }

  try {
    const result = await updateTask(requestJson.id, requestJson);
    return Response.json({ result });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const requestJson = await request.json();
  if (!requestJson.id) {
    return Response.json({ error: "Task ID is required" }, { status: 400 });
  }

  try {
    const result = await deleteTask(requestJson.id);
    return Response.json({ result });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
