import { StatusOption } from "@/components/ui/status";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatusText(status: StatusOption) {
  switch (status) {
    case StatusOption.TODO:
      return "To Do";
    case StatusOption.IN_PROGRESS:
      return "In Progress";
    case StatusOption.DONE:
      return "Done";
  }
}

export function getStatusClass(status: StatusOption) {
  switch (status) {
    case StatusOption.TODO:
      return "fill-blue-500";
    case StatusOption.IN_PROGRESS:
      return "fill-orange-400";
    case StatusOption.DONE:
      return "fill-green-500";
  }
}
