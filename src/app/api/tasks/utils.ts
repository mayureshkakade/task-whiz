import { Task } from "@/lib/types";

export const validateRequest = (request: Task) => {
  if (!request.title || request.title.trim().length === 0) {
    return { errorMessage: "The Title Field Cannot be Empty." };
  }
  if (!request.status) {
    return { errorMessage: "The Status Field Cannot be Empty." };
  }
  return null;
};
