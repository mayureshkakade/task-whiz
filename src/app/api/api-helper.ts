import { Task } from "@/lib/types";
import { isFormError } from "@/lib/utils";

const API_ENDPOINT = "/api/tasks/";
const HEADERS = {
  "Content-Type": "application/json",
};

export const updateStatus = async (id: string, status: string) => {
  const response = await fetch(API_ENDPOINT, {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify({
      status: status,
      id: id,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }
};

export const deleteTask = async (id: string) => {
  const response = await fetch(API_ENDPOINT, {
    method: "DELETE",
    headers: HEADERS,
    body: JSON.stringify({
      id: id,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
};

export const addNewTask = async ({
  title,
  description,
  status,
}: Omit<Task, "id">) => {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      title,
      description: description || null,
      status,
    }),
  });

  if (!response.ok) {
    const json = await response.json();
    if (isFormError(json)) {
      throw new Error(json.errorMessage);
    }
  }
};
