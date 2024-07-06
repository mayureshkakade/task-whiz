import { StatusOption } from "@/components/lib/status";

export type Task = {
  id: string;
  title: string;
  description: string | null;
  status: StatusOption;
};

export type FormError = {
  errorMessage: string;
};

export type FormType = Omit<Task, "id"> & { isLoading: boolean };

export enum FormActionType {
  SET_TITLE = "SET_TITLE",
  SET_DESCRIPTION = "SET_DESCRIPTION",
  SET_STATUS = "SET_STATUS",
  SET_LOADING = "SET_LOADING",
  RESET_FORM = "RESET_FORM",
}

export type FormAction = {
  type: FormActionType;
  payload?: Partial<FormType>;
};
