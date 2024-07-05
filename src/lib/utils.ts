import { StatusOption } from "@/components/lib/status";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormError } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatusText(status: StatusOption) {
  switch (status) {
    case StatusOption.TODO:
      return "TO-DO";
    case StatusOption.IN_PROGRESS:
      return "IN PROGRESS";
    case StatusOption.DONE:
      return "DONE";
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

export const isError = (error: any): error is Error => {
  return "message" in error;
};

export const isFormError = (error: any): error is FormError => {
  return "errorMessage" in error;
};
