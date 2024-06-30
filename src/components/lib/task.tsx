"use client";

import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Trash2Icon, PencilIcon, UndoIcon } from "lucide-react";
import { Status, StatusDropdown, StatusOption } from "./status";
import { FC, useCallback, useState } from "react";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogWrapper } from "./alert-dialog";

export interface TaskProps {
  description: string;
  status: StatusOption;
  title: string;
}

const Task: FC<TaskProps> = ({ description }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(StatusOption.TODO); // TODO: Use the currentStatus prop for default value coming from api

  const updateTaskStatus = useCallback(
    (status: StatusOption) => {
      console.log(status);
      // TODO: api call to update task status
      setCurrentStatus(status);
      setIsEditing(false);
    },
    [setCurrentStatus]
  );

  const onDelete = () => {
    console.log("delete");
    // TODO: api call to delete task
  };

  return (
    <Card className="bg-[#FFFAFA] border-zinc-200 shadow-md break-inside-avoid w-fit h-full grid grid-cols-1 grid-rows-[100px_1fr]">
      <CardHeader className="flex-row justify-between items-start gap-4">
        {/* TODO: Add a title prop to the Task component */}
        <CardTitle className="text-lg sm:text-xl">
          Card Title asd a asd asd aksjd asd{" "}
        </CardTitle>
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
        {/* TODO: Add a description prop to the Task component */}
        <p title={description} className="mb-4">
          {description}
        </p>

        {/* TODO: Send the currentStatus value to both the Status component and the StatusDropdown component */}
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
