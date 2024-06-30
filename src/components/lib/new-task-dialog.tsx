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
import { useCallback, useState } from "react";

function NewTaskDialog() {
  const [currentStatus, setCurrentStatus] = useState(StatusOption.TODO);

  const updateTaskStatus = useCallback(
    (status: StatusOption) => {
      console.log(status);
      setCurrentStatus(status);
    },
    [setCurrentStatus]
  );

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
            />
          </div>
          <div className="grid grid-cols-4 items-baseline gap-4">
            <Label htmlFor="description" className="text-right">
              Status
            </Label>
            <div className="col-span-3">
              <StatusDropdown
                currentStatus={currentStatus}
                updateTaskStatus={updateTaskStatus}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-zinc-600" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

NewTaskDialog.displayName = "NewTaskDialog";
export { NewTaskDialog };
