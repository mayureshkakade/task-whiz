"use client";

import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Trash2Icon, PencilIcon, UndoIcon } from "lucide-react";
import { Status, StatusDropdown, StatusOption } from "./status";
import { FC, useCallback, useState } from "react";
import { AlertDialogWrapper } from "./alert-dialog";
import { useToast } from "../ui/use-toast";
import { deleteTask, updateStatus } from "@/app/api/api-helper";

export interface TaskProps {
  description: string;
  status: StatusOption;
  title: string;
  id: string;
  fetchTasks: () => Promise<void>;
}

const Task: FC<TaskProps> = ({
  description,
  title,
  status,
  id,
  fetchTasks,
}) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const updateTaskStatus = useCallback(
    async (status: StatusOption) => {
      try {
        await updateStatus(id, status);
        fetchTasks();
      } catch (error) {
        toast({
          title: "Error updating task status",
          description: "Please try again later",
          variant: "destructive",
        });
        setIsEditing(false);
        return;
      }

      setCurrentStatus(status);
      setIsEditing(false);
    },
    [fetchTasks, id, toast]
  );

  const onDelete = useCallback(async () => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      toast({
        title: "Error deleting task",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  }, [fetchTasks, id, toast]);

  return (
    <Card className="bg-[#FFFAFA] border-zinc-200 shadow-md break-inside-avoid h-full grid grid-cols-1 grid-rows-[100px_1fr]">
      <CardHeader className="flex-row justify-between items-center gap-4">
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
        <div className="flex gap-1">
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={"ghost"}
            size={"icon"}
            className="h-7 w-7 hover:shadow-md"
          >
            {isEditing ? (
              <UndoIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <PencilIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </Button>
          <AlertDialogWrapper
            title="Delete Task"
            description="Are you sure you want to delete this task?"
            onConfirm={onDelete}
          >
            <Button
              variant={"ghost"}
              size={"icon"}
              className="h-7 w-7 hover:shadow-md"
            >
              <Trash2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            </Button>
          </AlertDialogWrapper>
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex flex-col justify-between">
        <p title={description} className="mb-4">
          {description}
        </p>
        <div className="sm:w-1/2">
          {isEditing ? (
            <StatusDropdown
              currentStatus={currentStatus}
              updateTaskStatus={updateTaskStatus}
            />
          ) : (
            <Status status={currentStatus} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

Task.displayName = "Task";

export { Task };
