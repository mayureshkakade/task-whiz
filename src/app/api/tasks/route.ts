import { addNewTask, getAllTasks } from "@/db/repository";
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
    return Response.json(validationResult, { status: 500 });
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
  const validationResult = validateRequest(requestJson);
  if (validationResult) {
    return Response.json(validationResult, { status: 500 });
  }

  try {
    const result = await addNewTask(requestJson);
    return Response.json({ result });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
