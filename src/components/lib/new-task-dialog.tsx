"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { StatusDropdown, StatusOption } from "./status";
import { MouseEventHandler, useCallback, useReducer } from "react";
import { FormAction, FormActionType, FormType, Task } from "@/lib/types";
import { isError, isFormError } from "@/lib/utils";
import { useToast } from "../ui/use-toast";

const initialFormState: FormType = {
  title: "",
  description: "",
  status: StatusOption.TODO,
  isLoading: false,
};

const formReducer = (
  state: FormType = initialFormState,
  action: FormAction
): FormType => {
  switch (action.type) {
    case FormActionType.SET_TITLE:
      return { ...state, title: action.payload?.title ?? "" };
    case FormActionType.SET_DESCRIPTION:
      return { ...state, description: action.payload?.description ?? "" };
    case FormActionType.SET_STATUS:
      return { ...state, status: action.payload?.status ?? StatusOption.TODO };
    case FormActionType.SET_LOADING:
      return { ...state, isLoading: action.payload?.isLoading ?? false };
    case FormActionType.RESET_FORM:
      return {
        ...state,
        title: "",
        description: "",
        status: StatusOption.TODO,
      };
    default:
      return state;
  }
};

interface NewTaskDialogProps {
  fetchTasks: () => void;
}

function NewTaskDialog({ fetchTasks }: NewTaskDialogProps) {
  const { toast } = useToast();
  const [{ title, description, status, isLoading }, dispatch] = useReducer(
    formReducer,
    initialFormState
  );

  const updateTaskStatus = useCallback((status: StatusOption) => {
    dispatch({ type: FormActionType.SET_STATUS, payload: { status } });
  }, []);

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    dispatch({
      type: FormActionType.SET_LOADING,
      payload: { isLoading: true },
    });

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

      toast({
        description: "Task added successfully!",
      });

      fetchTasks();
      dispatch({ type: FormActionType.RESET_FORM });
    } catch (error) {
      console.error({ error });
      if (isError(error)) {
        toast({
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          description: "Uh oh! Something went wrong",
          variant: "destructive",
        });
      }
    }

    dispatch({
      type: FormActionType.SET_LOADING,
      payload: { isLoading: false },
    });
  };

  const isDisabled = isLoading || !title;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="md:w-auto md:pl-4 md:pr-3 bg-zinc-600">
          <span className="hidden md:inline">New Task</span>
          <PlusIcon className="w-6 h-4 md:w-5 md:h-5 md:ml-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new task</DialogTitle>
          <DialogDescription>
            Provide a title and a description for your new task.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-baseline gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              className="col-span-3"
              id="title"
              maxLength={50}
              placeholder="Type your mission here..."
              value={title}
              onChange={(e) =>
                dispatch({
                  type: FormActionType.SET_TITLE,
                  payload: { title: e.target.value },
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-baseline gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              maxLength={200}
              placeholder="Describe your brilliant plan..."
              value={description ?? ""}
              onChange={(e) =>
                dispatch({
                  type: FormActionType.SET_DESCRIPTION,
                  payload: { description: e.target.value },
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-baseline gap-4">
            <Label htmlFor="description" className="text-right">
              Status
            </Label>
            <div className="col-span-3">
              <StatusDropdown
                currentStatus={status}
                updateTaskStatus={updateTaskStatus}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={isDisabled}
            className="bg-zinc-600"
            type="submit"
          >
            Add Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

NewTaskDialog.displayName = "NewTaskDialog";
export { NewTaskDialog };
